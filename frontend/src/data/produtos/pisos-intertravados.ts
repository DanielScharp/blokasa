import type { ProductPage } from './types'

// Para publicar outro produto desta categoria, adicione uma entrada aqui (veja types.ts).
// Só os produtos listados ganham página; os demais seguem com "Especificar no orçamento".

const retangular: ProductPage = {
  slug: 'piso-intertravado-retangular',
  line: 'Linha Arquitetura Mineral • Alta Performance',
  title: 'Paver Holandês (Retangular)',
  subtitle: 'Versatilidade arquitetônica, alta resistência e travamento contínuo',
  description:
    'O formato retangular é consagrado na engenharia de pavimentação intertravada. Fabricado em matriz de concreto com cura vapor controlada e agregados minerais selecionados, viabiliza múltiplas alternativas de paginação (espinha de peixe, amarração linear, dama), garantindo conforto de rolamento, atrito antiderrapante e perenidade estética para projetos públicos, industriais e residenciais.',
  seo: {
    title: 'Piso Intertravado Retangular 10x20 (Paver Holandês) | Blokasa',
    description:
      'Paver holandês 10x20 em 4, 6 e 8 cm: espessuras, paginações, cores, ficha técnica e simulador de quantidade. Orçamento direto de fábrica em São Paulo.',
  },
  gallery: [
    { file: 'home/catalog-1.jpg', alt: 'Calçada em parque pavimentada com piso intertravado retangular', caption: 'Calçada em amarração linear' },
    { file: 'home/proj-1.jpg', alt: 'Passeio com piso retangular em mix de cores', caption: 'Mix de tonalidades em paginação corrida' },
    { file: 'home/uso-foto.jpg', alt: 'Piso retangular em espinha de peixe com faixas contrastantes', caption: 'Espinha de peixe com faixas contrastantes' },
    { file: 'produtos/piso-intertravado-retangular.png', alt: 'Peça de piso intertravado retangular', caption: 'Peça 10 x 20 cm', cutout: true },
  ],
  highlights: [
    { label: 'Dimensões NBR', value: '10 x 20 cm' },
    { label: 'Rendimento', value: '50 peças / m²' },
    { label: 'Tolerância', value: '± 2,0 mm' },
    { label: 'Chanfro', value: '5 mm x 45°' },
  ],
  unit: 'm²',
  // A CONFIRMAR: a página antiga dizia "5%" no rótulo e calculava com 8%
  lossMargin: 0.08,
  // A CONFIRMAR: peso e m² por palete divergiam entre os cards e o simulador antigos.
  // Peso segue os cards (≈ espessura × 2,2 t/m³); m² por palete segue o simulador.
  variants: [
    {
      label: '4 cm',
      traffic: 'Tráfego Leve • Pedestres',
      resistance: '≥ 35 MPa',
      uses: ['Calçadas e passeios urbanos', 'Ciclovias e pátios de lazer', 'Áreas internas cobertas'],
      piecesPerUnit: 50,
      unitsPerPallet: 13,
      kgPerUnit: 100,
    },
    {
      label: '6 cm',
      traffic: 'Tráfego Médio • Veículos leves',
      resistance: '≥ 35 MPa',
      uses: ['Garagens residenciais e condominiais', 'Vias internas e calçadas', 'Acessos veiculares contínuos'],
      featured: true,
      piecesPerUnit: 50,
      unitsPerPallet: 13,
      kgPerUnit: 130,
    },
    {
      label: '8 cm',
      traffic: 'Tráfego Pesado',
      resistance: '≥ 50 MPa',
      uses: ['Vias urbanas e comerciais', 'Estacionamentos e pátios', 'Acessos de serviço e frota'],
      piecesPerUnit: 50,
      unitsPerPallet: 11,
      kgPerUnit: 175,
    },
  ],
  variantsCopy: {
    eyebrow: 'Classificação estrutural NBR 9781',
    title: 'Espessuras de Fabricação & Capacidade de Carga',
    lead: 'A escolha da espessura do bloco determina a vida útil e a estabilidade estrutural do pavimento conforme o fluxo e peso dos veículos.',
  },
  patterns: [
    {
      name: 'Espinha de Peixe (45° ou 90°)',
      text: 'A disposição mais travada para tráfego de veículos: distribui a força em todas as direções e evita deslocamento das peças.',
      tag: 'Recomendado: garagens e vias',
    },
    {
      name: 'Amarração Linear (Corrida)',
      text: 'Instalação mais rápida, com fileiras contínuas no mesmo sentido. Boa opção quando o fluxo de veículos é predominante em uma direção.',
      tag: 'Recomendado: calçadas e alamedas',
    },
    {
      name: 'Dama (Parquet / Cesto)',
      text: 'Agrupamento de duas a duas peças formando um padrão xadrez, com efeito estético em pátios e áreas de descanso.',
      tag: 'Recomendado: pátios e praças',
    },
  ],
  patternsCopy: {
    eyebrow: 'Caderno de Paginação e Travamento',
    title: 'Paginações Recomendadas pela Norma NBR 9781',
    lead: 'A geometria 10x20 oferece alta flexibilidade de arranjo construtivo. Conheça o comportamento estrutural de cada padrão antes de detalhar o projeto executivo.',
  },
  techSheet: [
    { label: 'Dimensões de fabricação (L x C)', value: '100 mm x 200 mm' },
    { label: 'Espessuras disponíveis', value: '40 · 60 · 80 mm' },
    { label: 'Consumo nominal por m²', value: '50 peças / m²' },
    { label: 'Resistência característica (fck)', value: '≥ 35 MPa (padrão) · 50 MPa (pesado)' },
    { label: 'Absorção de água média', value: '≤ 6%' },
    { label: 'Resistência à abrasão', value: '≤ 20 mm de desgaste' },
  ],
  simulatorCopy: {
    lead: 'Insira a área total de pavimentação para calcular o volume estimado de peças, a margem técnica de recorte e a quantidade de paletes de canteiro.',
  },
  logistics: {
    title: 'Embalagem Paletizada & Descarga Mecanizada',
    text: 'Paletes padronizados com filme protetor termoencolhível. Capacidade de 11 a 13 m² por palete, conforme espessura, com frota própria de caminhão munck para descarga sem danos ao canteiro.',
  },
}

export const pisosIntertravados: ProductPage[] = [retangular]
