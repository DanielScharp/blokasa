// Servidor estático para conferir o build localmente, com o mesmo comportamento de hosts como
// Netlify/Cloudflare Pages: arquivo exato → pasta/index.html → 404.html (status 404).
// Uso: npm run preview  (porta padrão 4173, ou PORT=xxxx)
import { createReadStream } from 'node:fs'
import { stat } from 'node:fs/promises'
import { createServer } from 'node:http'
import { extname, join, normalize, resolve } from 'node:path'

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
      res.writeHead(200, { 'Content-Type': types[extname(candidate)] ?? 'application/octet-stream' })
      createReadStream(candidate).pipe(res)
      return
    }
  }

  const notFound = join(root, '404.html')
  res.writeHead(404, { 'Content-Type': types['.html'] })
  if (await isFile(notFound)) createReadStream(notFound).pipe(res)
  else res.end('404')
}).listen(port, () => console.log(`build/client em http://localhost:${port}`))
