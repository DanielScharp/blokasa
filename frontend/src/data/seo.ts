import type { MetaDescriptor } from 'react-router'
import { company, siteUrl } from './company'

interface PageMeta {
  title: string
  description: string
  /** Caminho da página, ex.: "/produtos/piso-intertravado-retangular" */
  path: string
  /** URL (relativa ao site) da imagem de prévia, 1200x630 */
  image?: string
}

/** Título, descrição, canonical e Open Graph (prévia de link no WhatsApp e redes sociais). */
export function pageMeta({ title, description, path, image }: PageMeta): MetaDescriptor[] {
  const url = `${siteUrl}${path}`
  return [
    { title },
    { name: 'description', content: description },
    { tagName: 'link', rel: 'canonical', href: url },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'pt_BR' },
    { property: 'og:site_name', content: company.legalName },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: url },
    ...(image ? [{ property: 'og:image', content: `${siteUrl}${image}` }] : []),
    { name: 'twitter:card', content: image ? 'summary_large_image' : 'summary' },
  ]
}
