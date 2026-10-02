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

## Segurança do orçamento

Os limites de cada campo ficam em `quoteLimits` (`src/services/quotes.ts`) e valem para o `maxLength` dos inputs e
para a validação. Quando a API .NET (`POST /api/orcamentos`) entrar, ela precisa:

- revalidar no servidor com os mesmos limites (nunca confiar só na validação do navegador);
- limitar requisições por IP (rate limit) e ter um campo honeypot contra robôs;
- aceitar CORS só do domínio do site e responder apenas via HTTPS;
- manter segredos (connection string, chaves) só no servidor: tudo que começa com `VITE_` vai para o bundle público.
