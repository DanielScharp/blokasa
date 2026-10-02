# Blokasa · front-end

React 19 + TypeScript + Vite + React Router (modo framework), sem framework de CSS: cada componente tem seu
`*.module.css` e as cores, fontes, raios e sombras do Figma ficam em `src/styles/tokens.css`.

O site é estático: no build, cada página listada em `prerender` (`react-router.config.ts`) vira um HTML completo
em `build/client` (bom para SEO e para a prévia de links no WhatsApp). Não há servidor Node em produção; qualquer
URL fora do pré-render recebe o `404.html`.

## Estrutura

```
src/
├─ root.tsx           documento HTML (head, fontes, scripts)
├─ routes.ts          rotas do site
├─ entry.server.tsx   gera o HTML das páginas no build
├─ styles/            tokens.css (design tokens) e global.css
├─ data/              company.ts (dados oficiais), catalog.ts (catálogo), home.ts (textos da home), seo.ts
├─ services/          quotes.ts (validação e envio do orçamento)
├─ assets/            fotos (viram AVIF/WebP responsivos no build, ver <Picture>)
├─ components/
│  ├─ layout/         Header, Footer, WhatsAppButton, Layout (+ página de erro)
│  └─ ui/             Button, SectionHeader, Picture, asset()
└─ pages/             Home (com sections/), Produto, Privacidade, NotFound
public/images/home/   ícones SVG e logo
scripts/              postbuild.mjs (ajustes do build) e serve.mjs (npm run preview)
```

## Observações

- **Imagens:** fotos ficam em `src/assets/` e são importadas com `?picture`
  (`import foto from '../assets/home/foto.jpg?picture'`), o que gera AVIF/WebP/JPEG em 3 larguras com nome em hash.
  Use originais de até ~2400 px. Ícones SVG continuam em `public/images/home/`.
- **Orçamento:** até a API .NET existir, o formulário valida os dados e abre o WhatsApp da Blokasa com a
  mensagem pronta (`src/services/quotes.ts`). Depois passa a gravar no MySQL via `POST /api/orcamentos`.
- **Conteúdo a confirmar:** números (+350.000 m², 15 anos), obras do portfólio e depoimento vieram do Figma e
  estão em `src/data/home.ts` para revisão.
- **Privacidade:** `/privacidade` é um rascunho baseado no que o site faz hoje e precisa ser revisado pela Blokasa.

## Páginas de produto

Todas as páginas `/produtos/:slug` usam o mesmo modelo (`src/pages/Produto`); o conteúdo de cada uma fica em
`src/data/produtos/<categoria>.ts` (campos descritos em `types.ts`). Medidas e cores continuam em `catalog.ts`.

Para publicar um produto:

1. Coloque as fotos em `src/assets/produtos/` (até ~2400 px; recortes de peça marcados com `cutout: true`).
2. Adicione a entrada do produto no arquivo da categoria, com o mesmo `slug` de `catalog.ts`.
3. Rode `npm run build`: a página é pré-renderizada automaticamente e o card do produto passa a apontar para ela.

Seções sem dado (paginações, documentos, cores quando só há Natural) ficam ocultas. O simulador usa os números de
cada variação (`piecesPerUnit`, `unitsPerPallet`, `kgPerUnit`), os mesmos exibidos nos cards de espessura.

## Segurança do orçamento

Os limites de cada campo ficam em `quoteLimits` (`src/services/quotes.ts`) e valem para o `maxLength` dos inputs e
para a validação. Quando a API .NET (`POST /api/orcamentos`) entrar, ela precisa:

- revalidar no servidor com os mesmos limites (nunca confiar só na validação do navegador);
- limitar requisições por IP (rate limit) e ter um campo honeypot contra robôs;
- aceitar CORS só do domínio do site e responder apenas via HTTPS;
- manter segredos (connection string, chaves) só no servidor: tudo que começa com `VITE_` vai para o bundle público.

## Deploy

`npm run build` gera o site completo em `build/client` (HTML pré-renderizado, `404.html`, `sitemap.xml`,
`robots.txt` e `_headers`). Basta publicar essa pasta em qualquer host estático com HTTPS e compressão
(brotli/gzip). Antes de publicar, confirme o domínio em `siteUrl` (`src/data/company.ts`): ele vai no canonical,
no Open Graph e no sitemap.

O host precisa:

| O quê | Como |
|---|---|
| URL sem arquivo | servir `pasta/index.html`; se não existir, `404.html` com **status 404** (sem reescrever tudo para `index.html`) |
| `Strict-Transport-Security` | `max-age=31536000` |
| `Content-Security-Policy` | `frame-ancestors 'none'; upgrade-insecure-requests` (o restante do CSP já vai em cada HTML) |
| `X-Frame-Options` | `DENY` |
| `X-Content-Type-Options` | `nosniff` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=(), payment=(), usb=()` |
| `Cross-Origin-Opener-Policy` | `same-origin` |
| Cache de `/assets/*` | `Cache-Control: public, max-age=31536000, immutable` (nomes com hash) |

Netlify e Cloudflare Pages leem `public/_headers` sozinhos. Em nginx, o equivalente é
`try_files $uri $uri/index.html =404; error_page 404 /404.html;` mais um `add_header` para cada linha da tabela; no
IIS, `httpErrors` para o 404 e `customHeaders` no `web.config`.

O CSP de cada página libera só os scripts inline daquela página, pelo hash (`scripts/postbuild.mjs`). Por isso, não
use estilos ou scripts inline nos componentes (`style={{…}}`, `dangerouslySetInnerHTML`): eles seriam bloqueados.
Para conferir: `npm run preview` e o console do navegador não deve mostrar violações de CSP.

## Qualidade contínua

O workflow `.github/workflows/frontend.yml` roda em cada PR: lint, build, `npm audit` (falha com vulnerabilidade
alta nas dependências do site) e Lighthouse CI nas páginas principais (`lighthouserc.json`). Acessibilidade, SEO,
boas práticas, CLS, TBT e peso da página fazem o PR falhar; desempenho e LCP ainda são avisos até termos as primeiras
medições do CI. O Dependabot (`.github/dependabot.yml`) abre PRs semanais de atualização.
