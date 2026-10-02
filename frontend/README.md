# Blokasa · front-end

React 19 + TypeScript + Vite, sem framework de CSS: cada componente tem seu `*.module.css` e as cores,
fontes, raios e sombras do Figma ficam em `src/styles/tokens.css`.

## Estrutura

```
src/
├─ styles/            tokens.css (design tokens) e global.css
├─ data/              company.ts (dados oficiais), catalog.ts (catálogo), home.ts (textos da home)
├─ services/          quotes.ts (validação e envio do orçamento)
├─ components/
│  ├─ layout/         Header, Footer, WhatsAppButton, Layout
│  └─ ui/             Button, SectionHeader, asset()
└─ pages/Home/        Home.tsx + uma pasta sections/ com cada bloco do Figma
public/images/home/   imagens e ícones exportados do Figma
```

## Observações

- **Imagens:** os arquivos de `public/images/home/` vêm do Figma. Enquanto não estiverem no repositório, a página
  mostra os espaços vazios no lugar das fotos e ícones.
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
