import type { ProductPage } from './types'

// Blocos: o simulador trabalha em m² de parede (unit 'm²'); piecesPerUnit = blocos por m² de parede.
// Dados enviados pela Blokasa (02/10/2026). A resistência característica (fbk) depende da classe e
// do lote fornecido pelo fabricante, por isso não entra como valor fixo por variação — só na ficha
// técnica, como "a confirmar".

const blocoEstrutural: ProductPage = {
  slug: 'bloco-estrutural',
  line: 'Linha Blocos Estruturais',
  title: 'Bloco Estrutural de Concreto 14 × 19 × 39 cm',
  subtitle: 'Solução para sistemas de alvenaria estrutural',
  description:
    'O Bloco Estrutural de concreto 14 × 19 × 39 cm é destinado à execução de paredes e sistemas de alvenaria estrutural, permitindo racionalização da construção e modulação das paredes. A resistência específica deve ser definida conforme a classe e o lote fornecido pelo fabricante e o projeto estrutural.',
  seo: {
    title: 'Bloco Estrutural 14x19x39 cm | Blokasa',
    description:
      'Bloco estrutural de concreto 14x19x39 cm para sistemas de alvenaria estrutural. Solução modular para construção racionalizada. Consulte a resistência disponível.',
  },
  gallery: [],
  highlights: [
    { label: 'Largura', value: '14 cm' },
    { label: 'Comprimento', value: '39 cm' },
    { label: 'Rendimento', value: '12,5 peças / m²' },
  ],
  unit: 'm²',
  variantLabel: 'Dimensão',
  lossMargin: 0.05, // A CONFIRMAR: sem margem de perda informada pela Blokasa para este modelo
  variants: [
    {
      label: '14 × 19 × 39 cm',
      traffic: 'Alvenaria estrutural',
      piecesPerUnit: 12.5,
    },
  ],
  variantsCopy: {
    eyebrow: 'Dimensão e Rendimento',
    title: 'Especificação por Dimensão',
    lead: 'Como referência, o SINAPI especifica o bloco 14×19×39 cm com fbk de 14 MPa conforme a NBR 6136 — isso não é uma garantia de resistência da Blokasa. Confirme a classe e o fbk do lote fornecido com a nossa engenharia antes de especificar em projeto estrutural.',
  },
  techSheet: [
    { label: 'Material', value: 'Concreto' },
    { label: 'Dimensão', value: '14 x 19 x 39 cm' },
    { label: 'Cor', value: 'Natural' },
    { label: 'Rendimento', value: '12,5 peças / m²' },
    { label: 'Resistência característica (fbk)', value: 'A confirmar conforme classe e lote do fabricante' },
    { label: 'Norma de referência', value: 'ABNT NBR 6136 (família de blocos de concreto)' },
  ],
  techSheetCopy: {
    lead: 'Medidas e rendimento confirmados pela Blokasa. A resistência característica (fbk) depende da classe e do lote fornecido — confirme com a nossa engenharia antes de especificar em projeto estrutural.',
  },
}

const meioBlocoEstrutural: ProductPage = {
  slug: 'meio-bloco-estrutural',
  line: 'Linha Blocos Estruturais • Complemento',
  title: 'Meio Bloco Estrutural de Concreto 14 × 19 × 19 cm',
  subtitle: 'Peça complementar para modulação de alvenaria',
  description:
    'O Meio Bloco Estrutural é utilizado como peça complementar na execução de paredes estruturais, auxiliando a modulação, amarração e adequação das fiadas sem a necessidade de cortes excessivos das peças.',
  seo: {
    title: 'Meio Bloco Estrutural 14x19x19 | Blokasa',
    description:
      'Meio bloco estrutural de concreto 14x19x19 cm para modulação e complementação de paredes em sistemas de alvenaria estrutural.',
  },
  gallery: [],
  highlights: [
    { label: 'Dimensão', value: '14 x 19 x 19 cm' },
    { label: 'Uso', value: 'Complemento modular' },
    { label: 'Rendimento', value: '≈ 25 peças / m²' },
  ],
  unit: 'm²',
  variantLabel: 'Dimensão',
  lossMargin: 0.05, // A CONFIRMAR: sem margem de perda informada pela Blokasa para este modelo
  variants: [
    {
      label: '14 × 19 × 19 cm',
      traffic: 'Complementação de alvenaria estrutural',
      piecesPerUnit: 25,
    },
  ],
  variantsCopy: {
    eyebrow: 'Dimensão e Rendimento',
    title: 'Especificação por Dimensão',
    lead: 'Peça complementar: usada junto ao bloco estrutural para fechar fiadas e reduzir cortes. Confirme a classe e o fbk do lote com a nossa engenharia.',
  },
  techSheet: [
    { label: 'Material', value: 'Concreto' },
    { label: 'Dimensão', value: '14 x 19 x 19 cm' },
    { label: 'Cor', value: 'Natural' },
    { label: 'Rendimento', value: '≈ 25 peças / m²' },
    { label: 'Uso', value: 'Complementação de alvenaria estrutural' },
    { label: 'Resistência característica (fbk)', value: 'A confirmar conforme classe e lote do fabricante' },
  ],
  techSheetCopy: {
    lead: 'Medidas e rendimento confirmados pela Blokasa. A resistência característica (fbk) depende da classe e do lote fornecido — confirme com a nossa engenharia antes de especificar em projeto estrutural.',
  },
}

const blocoVedacao: ProductPage = {
  slug: 'bloco-vedacao',
  line: 'Linha Blocos de Vedação',
  title: 'Bloco de Vedação de Concreto',
  subtitle: 'Praticidade e racionalização para fechamento de paredes',
  description:
    'Os Blocos de Vedação de concreto são destinados à execução de paredes sem função estrutural, utilizadas principalmente para fechamento e divisão de ambientes. A linha está disponível em três espessuras, permitindo adequar a solução às necessidades de cada projeto.',
  seo: {
    title: 'Bloco de Vedação de Concreto 09, 14 e 19 cm | Blokasa',
    description: 'Blocos de vedação de concreto disponíveis em 09x19x39, 14x19x39 e 19x19x39 cm para fechamento e divisão de paredes.',
  },
  gallery: [
    { file: 'bloco-vedacao.png', alt: 'Bloco de vedação de concreto', caption: 'Bloco de vedação vazado', cutout: true },
  ],
  highlights: [
    { label: 'Espessuras', value: '09, 14 e 19 cm' },
    { label: 'Rendimento', value: '12,5 peças / m²' },
    { label: 'Aplicação', value: 'Paredes de vedação' },
  ],
  unit: 'm²',
  lossMargin: 0.05, // A CONFIRMAR: sem margem de perda informada pela Blokasa para este modelo
  variants: [
    { label: '9 cm', traffic: 'Vedação', piecesPerUnit: 12.5 },
    { label: '14 cm', traffic: 'Vedação', piecesPerUnit: 12.5 },
    { label: '19 cm', traffic: 'Vedação', piecesPerUnit: 12.5 },
  ],
  variantsCopy: {
    eyebrow: 'Dimensão e Rendimento',
    title: 'Espessura e Rendimento por Dimensão',
    lead: 'A família 14×19×39 cm aparece em referências SINAPI/NBR 6136 para blocos estruturais; blocos de vedação devem ser especificados conforme a classe e a finalidade correspondentes. Confirme com a nossa engenharia.',
  },
  techSheet: [
    { label: 'Material', value: 'Concreto' },
    { label: 'Dimensões', value: '09×19×39 · 14×19×39 · 19×19×39 cm' },
    { label: 'Cor', value: 'Natural' },
    { label: 'Rendimento', value: '12,5 peças / m² (todas as espessuras)' },
    { label: 'Aplicação', value: 'Paredes de vedação (sem função estrutural)' },
    { label: 'Resistência', value: 'A confirmar conforme classe e finalidade' },
  ],
  techSheetCopy: {
    lead: 'Medidas e rendimento confirmados pela Blokasa. A resistência depende da classe e da finalidade do lote — confirme com a nossa engenharia antes de especificar em projeto.',
  },
}

export const blocos: ProductPage[] = [blocoEstrutural, meioBlocoEstrutural, blocoVedacao]
