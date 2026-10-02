import type { Config } from '@react-router/dev/config'
import { getProduct } from './src/data/catalog'
import { productPages, productPath } from './src/data/produtos'

// Site estático: sem servidor Node. Cada página listada em `prerender` vira um HTML completo no build
// (bom para SEO e para a prévia de links no WhatsApp); o resto cai no 404.
export default {
  appDirectory: 'src',
  ssr: false,
  routeDiscovery: { mode: 'initial' },
  prerender() {
    const unknown = productPages.filter((p) => !getProduct(p.slug)).map((p) => p.slug)
    if (unknown.length) throw new Error(`Páginas de produto sem item em catalog.ts: ${unknown.join(', ')}`)
    return ['/', '/privacidade', ...productPages.map((p) => productPath(p.slug))]
  },
} satisfies Config
