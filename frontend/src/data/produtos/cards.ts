import { categories, formatMeasure, type Product } from '../catalog'
import { getProductPage } from './index'

/** Foto da peça (recorte) usada nos cards de /produtos. Produtos sem foto mostram um espaço neutro. */
const cutouts: Partial<Record<string, string>> = {
  'piso-intertravado-sextavado': 'piso-intertravado-sextavado.png',
  'piso-intertravado-onda-16-faces': 'piso-intertravado-onda.png',
  'piso-intertravado-retangular': 'piso-intertravado-retangular.png',
  'piso-intertravado-grama': 'piso-intertravado-grama.png',
  'piso-drenante-sextavado': 'piso-drenante-sextavado.png',
  'piso-drenante-retangular': 'blocos-drenantes.png',
  'bloco-vedacao': 'bloco-vedacao.png',
}

/** Conteúdo do card de um produto do catálogo (fora dos destaques da home). */
export function catalogCard(product: Product) {
  const page = getProductPage(product.slug)
  return {
    imageFile: cutouts[product.slug],
    description: page?.subtitle ?? `Medidas: ${product.measures.map(formatMeasure).join(' • ')}`,
    tags: [categories[product.category], product.colors.length > 1 ? `${product.colors.length} cores` : 'Cor natural'],
  }
}
