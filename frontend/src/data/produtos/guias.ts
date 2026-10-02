import type { ProductPage } from './types'

// Guias: o simulador trabalha em metro linear (unit 'm'); piecesPerUnit = peças por metro.
// Dados enviados pela Blokasa (02/10/2026). Peso e paletização ainda não informados.

const guiaPadraoSaoPaulo: ProductPage = {
  slug: 'guia-padrao-sao-paulo',
  line: 'Linha Guias de Concreto',
  title: 'Guia de Concreto Padrão São Paulo',
  subtitle: 'Acabamento e delimitação para calçadas e pavimentos',
  description:
    'A Guia Padrão São Paulo é um elemento pré-moldado de concreto destinado à delimitação de calçadas, pavimentos e áreas externas. Com 15 × 30 × 100 cm, proporciona acabamento linear e auxilia no confinamento e organização da pavimentação.',
  seo: {
    title: 'Guia Padrão São Paulo 15x30x100 | Blokasa',
    description:
      'Guia de concreto padrão São Paulo 15x30x100 cm para acabamento, delimitação e confinamento de calçadas, pisos intertravados e áreas externas.',
  },
  gallery: [],
  highlights: [
    { label: 'Comprimento', value: '1 metro' },
    { label: 'Padrão', value: 'São Paulo' },
    { label: 'Material', value: 'Concreto pré-moldado' },
  ],
  unit: 'm',
  variantLabel: 'Dimensão',
  lossMargin: 0.05, // A CONFIRMAR: sem margem de perda informada pela Blokasa para este modelo
  variants: [
    {
      label: '15 × 30 × 100 cm',
      uses: ['Delimitação de calçadas', 'Confinamento de pisos intertravados', 'Jardins', 'Vias e estacionamentos', 'Separação de áreas pavimentadas'],
      piecesPerUnit: 1,
    },
  ],
  variantsCopy: {
    eyebrow: 'Especificação da Peça',
    title: 'Dimensão e Rendimento',
    lead: 'Rendimento aproximado por metro linear; a quantidade final da obra é confirmada pela nossa engenharia.',
  },
  techSheet: [
    { label: 'Material', value: 'Concreto pré-moldado' },
    { label: 'Dimensão', value: '15 x 30 x 100 cm' },
    { label: 'Cor', value: 'Natural' },
    { label: 'Rendimento', value: '1 peça por metro' },
    { label: 'Peso', value: 'A confirmar' },
    { label: 'Paletização', value: 'A confirmar' },
  ],
  techSheetCopy: {
    lead: 'Medidas e material confirmados pela Blokasa. Peso e paletização ainda serão publicados — consulte a nossa equipe para o planejamento de transporte.',
  },
}

const miniGuiaJardim: ProductPage = {
  slug: 'mini-guia-jardim',
  line: 'Linha Guias de Jardim',
  title: 'Mini Guia de Concreto para Jardim',
  subtitle: 'Acabamento compacto para jardins e áreas externas',
  description:
    'A Mini Guia Jardim é uma solução compacta para delimitação de canteiros, jardins, caminhos e áreas externas. Com 8 × 19 × 39 cm, permite criar bordas e separações com acabamento em concreto natural.',
  seo: {
    title: 'Mini Guia Jardim 8x19x39 cm | Blokasa',
    description: 'Mini guia de concreto 8x19x39 cm para delimitação de jardins, canteiros, caminhos e áreas externas.',
  },
  gallery: [],
  highlights: [
    { label: 'Comprimento', value: '39 cm' },
    { label: 'Formato', value: 'Compacto' },
    { label: 'Rendimento', value: '≈ 2,56 peças / m' },
  ],
  unit: 'm',
  variantLabel: 'Dimensão',
  lossMargin: 0.05, // A CONFIRMAR: sem margem de perda informada pela Blokasa para este modelo
  variants: [
    {
      label: '8 × 19 × 39 cm',
      uses: ['Canteiros e jardins', 'Caminhos e trilhas', 'Áreas externas'],
      piecesPerUnit: 2.56,
    },
  ],
  variantsCopy: {
    eyebrow: 'Especificação da Peça',
    title: 'Dimensão e Rendimento',
    lead: 'Rendimento aproximado por metro linear; a quantidade final da obra é confirmada pela nossa engenharia.',
  },
  techSheet: [
    { label: 'Material', value: 'Concreto' },
    { label: 'Dimensão', value: '8 x 19 x 39 cm' },
    { label: 'Cor', value: 'Natural' },
    { label: 'Rendimento', value: '≈ 2,56 peças por metro' },
    { label: 'Peso', value: 'A confirmar' },
  ],
  techSheetCopy: {
    lead: 'Medidas e material confirmados pela Blokasa. Peso e paletização ainda serão publicados — consulte a nossa equipe para o planejamento de transporte.',
  },
}

export const guias: ProductPage[] = [guiaPadraoSaoPaulo, miniGuiaJardim]
