import type { ProductPage } from './types'

// Pisos drenantes: mesma estrutura dos intertravados (unit 'm²').
// Dados enviados pela Blokasa (02/10/2026). Resistência, absorção, abrasão, peso e paletização
// ainda não divulgados pela Blokasa entram como "A confirmar" — o simulador e os cards escondem
// automaticamente o que não foi informado.

const sextavado: ProductPage = {
  slug: 'piso-drenante-sextavado',
  line: 'Linha Pisos Drenantes',
  title: 'Piso Drenante Sextavado de Concreto',
  subtitle: 'Alta capacidade de drenagem, resistência e variedade de cores para áreas externas',
  description:
    'O Piso Drenante Sextavado é uma solução para pavimentação de áreas externas que favorece o escoamento da água, reduzindo o acúmulo superficial. Seu formato sextavado proporciona uma composição visual diferenciada e permite aplicações em calçadas, áreas de circulação, jardins, praças e outros espaços externos. Disponível nas cores natural, vermelho, grafite, amarelo e terracota.',
  seo: {
    title: 'Piso Drenante Sextavado | Blokasa',
    description:
      'Piso drenante sextavado de concreto para calçadas, jardins e áreas externas. Disponível em 25x25 e 30x30 cm, com opções de 6 e 8 cm e diversas cores.',
  },
  gallery: [
    { file: 'piso-drenante-sextavado.png', alt: 'Peça de piso drenante sextavado', caption: 'Peça sextavada drenante', cutout: true },
  ],
  highlights: [
    { label: 'Formato', value: 'Sextavado' },
    { label: 'Sistema', value: 'Drenante' },
    { label: 'Dimensões', value: '25×25 e 30×30 cm' },
    { label: 'Espessuras', value: '6 e 8 cm' },
  ],
  unit: 'm²',
  lossMargin: 0.08, // A CONFIRMAR: sem margem de perda informada pela Blokasa para este modelo
  variants: [
    { label: '25 × 25 × 6 cm', traffic: 'Pedestres / veículos leves', piecesPerUnit: 17 },
    { label: '25 × 25 × 8 cm', traffic: 'Veículos leves / médio', piecesPerUnit: 17 },
    { label: '30 × 30 × 8 cm', traffic: 'Veículos leves / médio', piecesPerUnit: 11.1 },
  ],
  variantsCopy: {
    eyebrow: 'Dimensões e Aplicação',
    title: 'Dimensões, Espessuras e Aplicação Recomendada',
    lead: 'A aplicação indicada é orientativa: depende também da resistência efetivamente fornecida pelo lote e do projeto da base e sub-base da obra.',
  },
  patterns: [
    {
      name: 'Paginação Alinhada',
      text: 'Fileiras retas alinhadas pelas faces opostas do hexágono, facilitando o corte nas bordas e a conferência visual das juntas.',
      tag: 'Recomendado: calçadas e passeios',
    },
    {
      name: 'Paginação Alternada',
      text: 'Encaixe intercalado entre fileiras, aproveitando o entrelaçamento natural do hexágono para reduzir recortes nas laterais.',
      tag: 'Recomendado: praças e pátios',
    },
    {
      name: 'Composição Geométrica',
      text: 'Combinação das próprias faces do sextavado para criar desenhos e losangos, valorizando projetos paisagísticos com identidade visual própria.',
      tag: 'Recomendado: jardins e áreas de lazer',
    },
  ],
  patternsCopy: {
    eyebrow: 'Caderno de Paginação',
    title: 'Paginações Recomendadas',
    lead: 'O encaixe hexagonal permite diferentes composições visuais, sem perder a capacidade de drenagem entre as juntas.',
  },
  techSheet: [
    { label: 'Material', value: 'Concreto' },
    { label: 'Formato', value: 'Sextavado' },
    { label: 'Cores', value: 'Natural, Vermelho, Grafite, Amarelo e Terracota' },
    { label: 'Dimensões', value: '25×25×6 · 25×25×8 · 30×30×8 cm' },
    { label: 'Resistência', value: 'Não divulgada pela Blokasa' },
    { label: 'Absorção de água', value: 'Não divulgada pela Blokasa' },
    { label: 'Resistência à abrasão', value: 'Não divulgada pela Blokasa' },
    { label: 'Tolerância dimensional', value: 'A confirmar com o fabricante' },
    { label: 'Chanfro', value: 'A confirmar com o fabricante' },
    { label: 'Norma específica / laudo', value: 'A confirmar com o fabricante' },
  ],
  techSheetCopy: {
    lead: 'Medidas, formato e cores são confirmados pela Blokasa. Os ensaios de resistência, absorção e abrasão ainda não foram publicados — fale com a nossa engenharia para o laudo mais recente.',
  },
}

const retangular: ProductPage = {
  slug: 'piso-drenante-retangular',
  line: 'Linha Pisos Drenantes',
  title: 'Piso Drenante Retangular de Concreto',
  subtitle: 'Praticidade, drenagem e acabamento para áreas externas',
  description:
    'O Piso Drenante Retangular combina o formato tradicional de 20 × 10 cm com uma solução voltada ao escoamento da água. É indicado para projetos externos que necessitam de uma pavimentação funcional e visualmente uniforme, podendo ser utilizado em calçadas, passeios, jardins, áreas de circulação e outros espaços externos.',
  seo: {
    title: 'Piso Drenante Retangular 20x10 | Blokasa',
    description:
      'Piso drenante retangular de concreto 20x10 cm, disponível nas espessuras de 4, 6 e 8 cm e nas cores natural, vermelho, grafite, amarelo e terracota.',
  },
  gallery: [],
  highlights: [
    { label: 'Formato', value: '20 x 10 cm' },
    { label: 'Sistema', value: 'Drenante' },
    { label: 'Espessuras', value: '4, 6 e 8 cm' },
    { label: 'Rendimento', value: '50 peças / m²' },
  ],
  unit: 'm²',
  lossMargin: 0.08, // A CONFIRMAR: sem margem de perda informada pela Blokasa para este modelo
  variants: [
    {
      label: '4 cm',
      traffic: 'Pedestres',
      uses: ['Calçadas', 'Passeios', 'Jardins', 'Áreas externas', 'Acessos e circulação'],
      piecesPerUnit: 50,
    },
    {
      label: '6 cm',
      traffic: 'Pedestres / veículos leves',
      uses: ['Calçadas', 'Passeios', 'Jardins', 'Áreas externas', 'Acessos e circulação'],
      piecesPerUnit: 50,
    },
    {
      label: '8 cm',
      traffic: 'Veículos leves / médio',
      uses: ['Calçadas', 'Passeios', 'Jardins', 'Áreas externas', 'Acessos e circulação'],
      piecesPerUnit: 50,
    },
  ],
  variantsCopy: {
    eyebrow: 'Dimensões e Aplicação',
    title: 'Espessuras e Aplicação Recomendada',
    lead: 'A aplicação indicada é orientativa: depende também da resistência efetivamente fornecida pelo lote e do projeto da base e sub-base da obra.',
  },
  patterns: [
    {
      name: 'Amarração Tradicional',
      text: 'Fileiras contínuas no mesmo sentido, com junta corrida entre peças — a instalação mais simples e rápida para o formato retangular.',
      tag: 'Recomendado: calçadas e passeios',
    },
    {
      name: 'Espinha de Peixe',
      text: 'Disposição em ângulo que trava as peças em mais de uma direção, quando a geometria e o sistema de assentamento do lote permitem.',
      tag: 'Recomendado: acessos e áreas de circulação',
    },
    {
      name: 'Paginação Longitudinal',
      text: 'Peças dispostas no sentido do comprimento da via ou calçada, reforçando a percepção de continuidade do percurso.',
      tag: 'Recomendado: passeios lineares',
    },
    {
      name: 'Paginação Transversal',
      text: 'Peças dispostas perpendicularmente ao fluxo, útil para marcar faixas, acessos ou transições entre trechos.',
      tag: 'Recomendado: faixas e transições',
    },
  ],
  patternsCopy: {
    eyebrow: 'Caderno de Paginação',
    title: 'Paginações Recomendadas',
    lead: 'O formato retangular aceita diferentes arranjos construtivos, sem perder a capacidade de drenagem entre as juntas.',
  },
  techSheet: [
    { label: 'Material', value: 'Concreto' },
    { label: 'Dimensão', value: '20 x 10 cm' },
    { label: 'Espessuras', value: '4, 6 e 8 cm' },
    { label: 'Cores', value: 'Natural, Vermelho, Grafite, Amarelo e Terracota' },
    { label: 'Resistência', value: 'Não divulgada pela Blokasa' },
    { label: 'Absorção de água', value: 'Não divulgada pela Blokasa' },
    { label: 'Resistência à abrasão', value: 'Não divulgada pela Blokasa' },
    { label: 'Norma específica / laudo', value: 'A confirmar com o fabricante' },
  ],
  techSheetCopy: {
    lead: 'Medidas, formato e cores são confirmados pela Blokasa. Os ensaios de resistência, absorção e abrasão ainda não foram publicados — fale com a nossa engenharia para o laudo mais recente.',
  },
}

export const pisosDrenantes: ProductPage[] = [sextavado, retangular]
