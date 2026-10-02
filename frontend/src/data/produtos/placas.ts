import type { ProductPage } from './types'

// Placas: unit 'm²'.
// Dados enviados pela Blokasa (02/10/2026). Resistência, absorção, abrasão, chanfro e paletização
// ainda não publicados pela Blokasa entram como "A confirmar"/"Não publicada".

const placaDrenante: ProductPage = {
  slug: 'placa-drenante',
  line: 'Linha Pisos Drenantes',
  title: 'Placa Drenante de Concreto 40 × 40 cm',
  subtitle: 'Grande formato para pavimentação de áreas externas',
  description:
    'A Placa Drenante de concreto é uma alternativa para pavimentação de áreas externas que necessitam favorecer o escoamento da água. Com formato de 40 × 40 cm, proporciona uma instalação com menos juntas e uma aparência mais uniforme, sendo adequada para projetos de calçadas, jardins, áreas externas e espaços de circulação.',
  seo: {
    title: 'Placa Drenante 40x40x6 cm | Blokasa',
    description:
      'Placa drenante de concreto 40x40x6 cm para calçadas, jardins e áreas externas. Disponível nas cores natural, vermelho, grafite, amarelo e terracota.',
  },
  gallery: [],
  highlights: [
    { label: 'Dimensão', value: '40 x 40 cm' },
    { label: 'Espessura', value: '6 cm' },
    { label: 'Sistema', value: 'Drenante' },
    { label: 'Rendimento', value: '6,25 peças / m²' },
  ],
  unit: 'm²',
  lossMargin: 0.08, // A CONFIRMAR: sem margem de perda informada pela Blokasa para este modelo
  variants: [
    {
      label: '6 cm',
      traffic: 'Pedestres',
      uses: ['Calçadas', 'Jardins', 'Áreas externas', 'Passeios', 'Áreas de circulação'],
      piecesPerUnit: 6.25,
    },
  ],
  variantsCopy: {
    eyebrow: 'Dimensão Disponível',
    title: 'Espessura e Aplicação Recomendada',
    lead: 'A aplicação indicada é orientativa: depende também da resistência efetivamente fornecida pelo lote e do projeto da base e sub-base da obra.',
  },
  techSheet: [
    { label: 'Material', value: 'Concreto' },
    { label: 'Dimensão', value: '40 x 40 x 6 cm' },
    { label: 'Cores', value: 'Natural, Vermelho, Grafite, Amarelo e Terracota' },
    { label: 'Resistência', value: 'Não publicada pela Blokasa' },
    { label: 'Absorção de água', value: 'Não publicada pela Blokasa' },
    { label: 'Resistência à abrasão', value: 'Não publicada pela Blokasa' },
    { label: 'Chanfro', value: 'Não publicado pela Blokasa' },
    { label: 'Paletização', value: 'Não publicada pela Blokasa' },
  ],
  techSheetCopy: {
    lead: 'Medidas, formato e cores são confirmados pela Blokasa. Os ensaios de resistência, absorção e abrasão ainda não foram publicados — fale com a nossa engenharia para o laudo mais recente.',
  },
}

export const placas: ProductPage[] = [placaDrenante]
