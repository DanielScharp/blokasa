// Ajustes no build estático depois do `react-router build`:
//  1. 404.html para URLs fora do pré-render
//  2. Content-Security-Policy em cada HTML, com o hash dos scripts inline daquela página
//  3. sitemap.xml e robots.txt a partir das páginas indexáveis (as que têm <link rel="canonical">)
import { createHash } from 'node:crypto'
import { copyFile, cp, readdir, readFile, rm, writeFile } from 'node:fs/promises'
import { join, relative } from 'node:path'

const client = 'build/client'
const hostingerDist = 'dist'

// Toda página válida é pré-renderizada; o resto cai no 404.html, que os hosts estáticos servem com status 404.
// Ele é o shell da SPA: o roteador carrega e mostra a página "não encontrada".
await copyFile(join(client, '__spa-fallback.html'), join(client, '404.html'))

async function htmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const nested = await Promise.all(
    entries.map((e) => {
      const path = join(dir, e.name)
      if (e.isDirectory()) return e.name === 'assets' ? [] : htmlFiles(path)
      return e.name.endsWith('.html') ? [path] : []
    }),
  )
  return nested.flat()
}

// Os scripts inline são os dados de hidratação do React Router; cada um é liberado pelo seu hash.
// `frame-ancestors` e `upgrade-insecure-requests` não funcionam via <meta>: vão nos headers do host (public/_headers).
const csp = (hashes) =>
  [
    "default-src 'self'",
    `script-src 'self' ${hashes.map((h) => `'sha256-${h}'`).join(' ')}`,
    "style-src 'self'",
    "img-src 'self' data:",
    "font-src 'self'",
    "connect-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
  ].join('; ')

const inlineScript = /<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g
const canonical = /<link rel="canonical" href="([^"]+)"/

const files = await htmlFiles(client)
const pages = []
for (const file of files) {
  let html = await readFile(file, 'utf8')
  const hashes = [...new Set([...html.matchAll(inlineScript)].map((m) => createHash('sha256').update(m[1]).digest('base64')))]
  const meta = `<meta http-equiv="Content-Security-Policy" content="${csp(hashes)}"/>`
  // Logo após o charset, antes de qualquer script ou folha de estilo
  if (!/<meta charSet="UTF-8"\/>/i.test(html)) throw new Error(`postbuild: charset não encontrado em ${file}`)
  html = html.replace(/<meta charSet="UTF-8"\/>/i, (m) => m + meta)
  await writeFile(file, html)

  const url = html.match(canonical)?.[1]
  if (url) pages.push(url)
  else console.log(`postbuild: ${relative(client, file)} fora do sitemap (sem canonical)`)
}

pages.sort()
const origin = new URL(pages[0]).origin
await writeFile(
  join(client, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((url) => `  <url><loc>${url}</loc></url>`).join('\n')}
</urlset>
`,
)
await writeFile(join(client, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`)

await rm(hostingerDist, { recursive: true, force: true })
await cp(client, hostingerDist, { recursive: true })
console.log(`postbuild: CSP em ${files.length} arquivos HTML, sitemap com ${pages.length} URLs`)
