import { categories, formatMeasure, type Product } from '../catalog'
import { getProductPage } from './index'

/** Conteúdo do card de um produto do catálogo (fora dos destaques da home). */
export function catalogCard(product: Product) {
  const page = getProductPage(product.slug)
  const cover = page?.gallery[0]
  return {
    imageFile: cover?.file,
    imageCutout: cover?.cutout,
    description: page?.subtitle ?? `Medidas: ${product.measures.map(formatMeasure).join(' • ')}`,
    tags: [categories[product.category], product.colors.length > 1 ? `${product.colors.length} cores` : 'Cor natural'],
  }
}
