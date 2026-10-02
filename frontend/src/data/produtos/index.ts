// Páginas de produto publicadas. Este módulo não importa imagens: também é lido pelo
// react-router.config.ts para montar a lista de páginas pré-renderizadas.
import { blocos } from './blocos'
import { guias } from './guias'
import { pisosDrenantes } from './pisos-drenantes'
import { pisosIntertravados } from './pisos-intertravados'
import { placas } from './placas'
import type { ProductPage } from './types'

export type { GalleryImage, Pattern, ProductPage, SectionCopy, Variant } from './types'

export const productPages: ProductPage[] = [...pisosIntertravados, ...pisosDrenantes, ...placas, ...guias, ...blocos]

export const getProductPage = (slug: string) => productPages.find((p) => p.slug === slug)

export const hasProductPage = (slug: string) => productPages.some((p) => p.slug === slug)

export const productPath = (slug: string) => `/produtos/${slug}`
