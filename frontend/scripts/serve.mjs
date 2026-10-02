// Servidor estático para conferir o build localmente, com o mesmo comportamento de hosts como
// Netlify/Cloudflare Pages: arquivo exato → pasta/index.html → 404.html (status 404), com compressão
// brotli/gzip nos arquivos de texto (como em produção, para o Lighthouse medir valores realistas).
// Uso: npm run preview  (porta padrão 4173, ou PORT=xxxx)
import { createReadStream } from 'node:fs'
import { readFile, stat } from 'node:fs/promises'
import { createServer } from 'node:http'
import { extname, join, normalize, resolve } from 'node:path'
import { brotliCompressSync, constants, gzipSync } from 'node:zlib'

const root = resolve('build/client')
const port = Number(process.env.PORT ?? 4173)

const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.data': 'text/x-script',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.woff2': 'font/woff2',
  '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8',
}

const compressible = new Set(['.html', '.js', '.css', '.json', '.data', '.svg', '.xml', '.txt'])

const brotli = (buf) => brotliCompressSync(buf, { params: { [constants.BROTLI_PARAM_QUALITY]: 9 } })

async function send(req, res, path, status) {
  const type = types[extname(path)] ?? 'application/octet-stream'
  const accept = String(req.headers['accept-encoding'] ?? '')
  const encoding = !compressible.has(extname(path)) ? null : accept.includes('br') ? 'br' : accept.includes('gzip') ? 'gzip' : null
  if (!encoding) {
    res.writeHead(status, { 'Content-Type': type, 'Content-Length': (await stat(path)).size })
    createReadStream(path).pipe(res)
    return
  }
  // Comprime em memória e envia com Content-Length, como um CDN (respostas pequenas)
  const raw = await readFile(path)
  const body = encoding === 'br' ? brotli(raw) : gzipSync(raw)
  res.writeHead(status, { 'Content-Type': type, 'Content-Encoding': encoding, 'Content-Length': body.length, Vary: 'Accept-Encoding' })
  res.end(body)
}

async function isFile(path) {
  try {
    return (await stat(path)).isFile()
  } catch {
    return false
  }
}

createServer(async (req, res) => {
  const pathname = decodeURIComponent(new URL(req.url ?? '/', 'http://localhost').pathname)
  const file = normalize(join(root, pathname))
  if (!file.startsWith(root)) {
    res.writeHead(400).end()
    return
  }

  const candidates = [file, join(file, 'index.html')]
  for (const candidate of candidates) {
    if (await isFile(candidate)) {
      await send(req, res, candidate, 200)
      return
    }
  }

  const notFound = join(root, '404.html')
  if (await isFile(notFound)) await send(req, res, notFound, 404)
  else res.writeHead(404).end('404')
}).listen(port, () => console.log(`build/client em http://localhost:${port}`))
