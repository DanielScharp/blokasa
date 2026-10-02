// Conteúdo das páginas de produto (/produtos/:slug). Medidas e cores continuam em catalog.ts.

/** Título de uma seção. Os campos omitidos usam o texto padrão da seção. */
export interface SectionCopy {
  eyebrow?: string
  title?: string
  lead?: string
}

export interface GalleryImage {
  /** Arquivo em src/assets/produtos, ex.: "piso-intertravado-retangular.png" */
  file: string
  alt: string
  caption?: string
  /** Foto de peça recortada (fundo branco/transparente): aparece inteira, sem corte */
  cutout?: boolean
}

/**
 * Uma espessura (pisos) ou um modelo/dimensão (blocos e guias).
 * Os números alimentam o card e o simulador ao mesmo tempo, por isso ficam num lugar só.
 */
export interface Variant {
  /** Ex.: "6 cm" */
  label: string
  /** Ex.: "Tráfego Médio • Veículos leves" */
  traffic?: string
  /** Ex.: "≥ 35 MPa" */
  resistance?: string
  uses?: string[]
  /** Destaque "Mais especificado" */
  featured?: boolean
  /** Peças por unidade de cálculo (m² de piso, m² de parede ou metro linear) */
  piecesPerUnit: number
  /** Unidades (m² ou m) que cabem em um palete. Sem esse dado, o simulador mostra "A confirmar". */
  unitsPerPallet?: number
  /** Peso por unidade, em kg. Sem esse dado, o simulador mostra "A confirmar" e o card não exibe peso. */
  kgPerUnit?: number
}

export interface Pattern {
  name: string
  text: string
  tag: string
}

export interface ProductPage {
  /** Mesmo slug do produto em catalog.ts */
  slug: string
  /** Selo acima do título, ex.: "Linha Arquitetura Mineral • Alta Performance" */
  line: string
  title: string
  subtitle: string
  description: string
  seo: { title: string; description: string }
  /** A primeira é a imagem principal (e a da prévia de link) */
  gallery: GalleryImage[]
  /** Linha de até 4 especificações no topo, ex.: { label: 'Rendimento', value: '50 peças / m²' } */
  highlights: { label: string; value: string }[]
  /** Unidade de cálculo do simulador: m² (pisos, placas, paredes de bloco) ou m (guias) */
  unit: 'm²' | 'm'
  /** Margem técnica de perda/recorte do simulador, ex.: 0.08 = 8% */
  lossMargin: number
  variants: Variant[]
  /** Nome da variação no simulador, ex.: "Espessura" (padrão) ou "Dimensão" */
  variantLabel?: string
  variantsCopy?: SectionCopy
  patterns?: Pattern[]
  patternsCopy?: SectionCopy
  colorsCopy?: SectionCopy
  techSheet: { label: string; value: string }[]
  techSheetCopy?: SectionCopy
  logistics?: { title: string; text: string }
  /** Arquivos para download. Sem arquivos, a página oferece pedir a documentação pelo orçamento. */
  documents?: { label: string; href: string }[]
  simulatorCopy?: SectionCopy
}
