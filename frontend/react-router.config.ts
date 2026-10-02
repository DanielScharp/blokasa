import type { Config } from '@react-router/dev/config'

// Site estático: sem servidor Node. Cada página listada em `prerender` vira um HTML completo no build
// (bom para SEO e para a prévia de links no WhatsApp); o resto cai no 404.
export default {
  appDirectory: 'src',
  ssr: false,
  routeDiscovery: { mode: 'initial' },
  prerender: ['/', '/privacidade', '/produtos/piso-intertravado-retangular'],
} satisfies Config
