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
    { file: 'retangular-calcada.jpg', alt: 'Calçada em parque pavimentada com piso intertravado retangular', caption: 'Calçada em amarração linear' },
    { file: 'retangular-mix-de-cores.jpg', alt: 'Passeio com piso retangular em mix de cores', caption: 'Mix de tonalidades em paginação corrida' },
    { file: 'retangular-espinha-de-peixe.jpg', alt: 'Piso retangular em espinha de peixe com faixas contrastantes', caption: 'Espinha de peixe com faixas contrastantes' },
    { file: 'piso-intertravado-retangular.png', alt: 'Peça de piso intertravado retangular', caption: 'Peça 10 x 20 cm', cutout: true },
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

// Dados enviados pela Blokasa (02/10/2026). Medidas, resistência (fck), peso e paletização ainda
// não divulgados pela Blokasa para este modelo entram como "A confirmar" — o simulador e os cards
// escondem automaticamente o que não foi informado.
const sextavado: ProductPage = {
  slug: 'piso-intertravado-sextavado',
  line: 'Linha Pisos Intertravados',
  title: 'Piso Intertravado Sextavado de Concreto',
  subtitle: 'Intertravamento, resistência e variedade de cores para pavimentação',
  description:
    'O Piso Intertravado Sextavado é produzido em concreto e utiliza o encaixe entre peças para formar pavimentos estáveis e de fácil manutenção. É uma solução versátil para calçadas, estacionamentos, praças, pátios e demais áreas externas, com opções de diferentes espessuras e cores.',
  seo: {
    title: 'Piso Intertravado Sextavado 25x25 e 30x30 | Blokasa',
    description:
      'Piso intertravado sextavado de concreto para calçadas, estacionamentos, praças e áreas externas. Disponível em 6 e 8 cm e nas cores natural, vermelho, grafite, amarelo e terracota.',
  },
  gallery: [
    { file: 'sextavado-instalado.jpg', alt: 'Piso intertravado sextavado aplicado em área externa', caption: 'Pavimentação em preto e branco' },
    { file: 'piso-intertravado-sextavado.png', alt: 'Peça de piso intertravado sextavado', caption: 'Peça sextavada', cutout: true },
  ],
  highlights: [
    { label: 'Formato', value: 'Sextavado' },
    { label: 'Sistema', value: 'Intertravado' },
    { label: 'Dimensões', value: '3 disponíveis' },
    { label: 'Norma de referência', value: 'NBR 9781' },
  ],
  unit: 'm²',
  lossMargin: 0.08, // A CONFIRMAR: sem margem de perda informada pela Blokasa para este modelo
  variants: [
    {
      label: '25 × 25 × 6 cm',
      traffic: 'Pedestres / veículos leves',
      piecesPerUnit: 17,
    },
    {
      label: '25 × 25 × 8 cm',
      traffic: 'Veículos leves / médio',
      piecesPerUnit: 17,
    },
    {
      label: '30 × 30 × 8 cm',
      traffic: 'Veículos leves / médio',
      piecesPerUnit: 11.1,
    },
  ],
  variantsCopy: {
    eyebrow: 'Dimensões e Aplicação',
    title: 'Dimensões, Espessuras e Aplicação Recomendada',
    lead: 'A aplicação indicada é orientativa: depende também da resistência efetivamente fornecida pelo lote e do projeto da base e sub-base da obra.',
  },
  patterns: [
    {
      name: 'Paginação Contínua',
      text: 'Fileiras alinhadas pelas faces do hexágono, repetindo o módulo em toda a área e simplificando o corte nas bordas.',
      tag: 'Recomendado: calçadas e vias',
    },
    {
      name: 'Composição em Linhas',
      text: 'Agrupamento das peças em faixas retas, útil para marcar percursos ou alternar cores em trechos definidos.',
      tag: 'Recomendado: passeios e acessos',
    },
    {
      name: 'Paginação Geométrica',
      text: 'Exploração do encaixe hexagonal para formar desenhos, estrelas e losangos no piso.',
      tag: 'Recomendado: praças e pátios',
    },
    {
      name: 'Combinação de Cores',
      text: 'Alternância de tonalidades entre peças sextavadas para criar contraste, sinalização visual ou identidade de projeto.',
      tag: 'Recomendado: projetos paisagísticos',
    },
  ],
  patternsCopy: {
    eyebrow: 'Caderno de Paginação',
    title: 'Paginações Recomendadas',
    lead: 'O encaixe hexagonal permite diferentes composições visuais. Avalie o padrão com a nossa engenharia antes de detalhar o projeto executivo.',
  },
  techSheet: [
    { label: 'Material', value: 'Concreto' },
    { label: 'Formato', value: 'Sextavado' },
    { label: 'Dimensões', value: '25×25×6 · 25×25×8 · 30×30×8 cm' },
    { label: 'Cores', value: 'Natural, Vermelho, Grafite, Amarelo e Terracota' },
    { label: 'Resistência característica (fck)', value: 'A confirmar (ref. NBR 9781: ≥ 35 MPa geral / ≥ 50 MPa severo)' },
    { label: 'Absorção de água', value: 'A confirmar (ref. NBR 9781: ≤ 6% média / 7% individual)' },
    { label: 'Norma de referência', value: 'ABNT NBR 9781' },
  ],
  techSheetCopy: {
    lead: 'Medidas, formato e cores são confirmados pela Blokasa. Os valores de resistência e absorção seguem a NBR 9781 como referência de mercado — solicite o laudo específico do lote com a nossa engenharia.',
  },
}

// Dados enviados pela Blokasa (02/10/2026). Mesma observação de dados pendentes do Sextavado acima.
const onda16Faces: ProductPage = {
  slug: 'piso-intertravado-onda-16-faces',
  line: 'Linha Pisos Intertravados',
  title: 'Piso Intertravado Onda 16 Faces',
  subtitle: 'Excelente travamento e acabamento para diferentes aplicações',
  description:
    'O Piso Intertravado Onda 16 Faces possui geometria desenvolvida para favorecer o travamento entre as peças, formando uma superfície contínua e resistente. É uma solução versátil para calçadas, pátios, estacionamentos e áreas externas, disponível em diferentes espessuras e cores.',
  seo: {
    title: 'Piso Intertravado Onda 16 Faces 22x11 | Blokasa',
    description:
      'Piso intertravado Onda 16 Faces de concreto 22x11 cm, disponível em 6, 8 e 10 cm. Indicado para calçadas, pátios, estacionamentos e áreas externas.',
  },
  gallery: [
    { file: 'onda-16-faces-instalado.jpg', alt: 'Piso intertravado onda 16 faces aplicado em área externa', caption: 'Pavimentação em tons de cinza e vermelho' },
    { file: 'piso-intertravado-onda.png', alt: 'Peça de piso intertravado onda 16 faces', caption: 'Peça onda 16 faces', cutout: true },
  ],
  highlights: [
    { label: 'Modelo', value: '16 faces' },
    { label: 'Sistema', value: 'Alto intertravamento' },
    { label: 'Espessuras', value: '6, 8 e 10 cm' },
    { label: 'Norma de referência', value: 'NBR 9781' },
  ],
  unit: 'm²',
  lossMargin: 0.08, // A CONFIRMAR: sem margem de perda informada pela Blokasa para este modelo
  variants: [
    { label: '6 cm', traffic: 'Pedestres / veículos leves', piecesPerUnit: 40 },
    { label: '8 cm', traffic: 'Veículos leves / médio', piecesPerUnit: 40 },
    { label: '10 cm', traffic: 'Tráfego mais intenso', piecesPerUnit: 40 },
  ],
  variantsCopy: {
    eyebrow: 'Dimensões e Aplicação',
    title: 'Espessuras e Aplicação Recomendada',
    lead: 'A aplicação indicada é orientativa: depende também da resistência efetivamente fornecida pelo lote e do projeto da base e sub-base da obra.',
  },
  patterns: [
    {
      name: 'Paginação Longitudinal',
      text: 'Fileiras no sentido do comprimento da via, acompanhando o fluxo principal de veículos ou pedestres.',
      tag: 'Recomendado: vias e acessos',
    },
    {
      name: 'Paginação Transversal',
      text: 'Fileiras perpendiculares ao fluxo, reforçando o travamento lateral em trechos de frenagem ou manobra.',
      tag: 'Recomendado: pátios e estacionamentos',
    },
    {
      name: 'Combinação de Cores',
      text: 'Alternância de tonalidades entre fileiras para sinalizar faixas, acessos ou limites de área.',
      tag: 'Recomendado: sinalização viária',
    },
    {
      name: 'Paginação Contínua',
      text: 'Repetição do módulo onda em toda a área, mantendo o travamento uniforme entre as 16 faces de cada peça.',
      tag: 'Recomendado: tráfego intenso',
    },
  ],
  patternsCopy: {
    eyebrow: 'Caderno de Paginação',
    title: 'Paginações Recomendadas',
    lead: 'O encaixe de 16 faces favorece o travamento em várias direções. Avalie o padrão com a nossa engenharia antes de detalhar o projeto executivo.',
  },
  techSheet: [
    { label: 'Material', value: 'Concreto' },
    { label: 'Formato', value: 'Onda 16 faces' },
    { label: 'Dimensões', value: '22×11×6 · 22×11×8 · 22×11×10 cm' },
    { label: 'Cores', value: 'Natural, Vermelho, Grafite, Amarelo e Terracota' },
    { label: 'Resistência característica (fck)', value: 'A confirmar (ref. NBR 9781: ≥ 35 MPa geral / ≥ 50 MPa severo)' },
    { label: 'Absorção de água', value: 'A confirmar (ref. NBR 9781: ≤ 6% média / 7% individual)' },
    { label: 'Norma de referência', value: 'ABNT NBR 9781' },
  ],
  techSheetCopy: {
    lead: 'Medidas, formato e cores são confirmados pela Blokasa. Os valores de resistência e absorção seguem a NBR 9781 como referência de mercado — solicite o laudo específico do lote com a nossa engenharia.',
  },
}

// Dados enviados pela Blokasa (02/10/2026).
const grama: ProductPage = {
  slug: 'piso-intertravado-grama',
  line: 'Linha Piso Grama',
  title: 'Piso Intertravado Grama / Concregrama',
  subtitle: 'Pavimentação que combina concreto e áreas verdes',
  description:
    'O Piso Intertravado Grama, também conhecido como concregrama, combina elementos de concreto com áreas destinadas ao crescimento de grama, permitindo criar superfícies externas com maior presença de áreas verdes. É uma alternativa para jardins, estacionamentos, acessos e áreas externas onde se deseja conciliar pavimentação e paisagismo.',
  seo: {
    title: 'Piso Grama / Concregrama 60x45 e 50x50 | Blokasa',
    description:
      'Piso grama de concreto para estacionamentos, jardins, acessos e áreas externas. Disponível nos formatos 60x45x9,5 cm e 50x50x9,5 cm.',
  },
  gallery: [
    { file: 'piso-intertravado-grama.png', alt: 'Peça de piso intertravado grama (concregrama)', caption: 'Peça vazada para crescimento de grama', cutout: true },
  ],
  highlights: [
    { label: 'Composição', value: 'Concreto + área verde' },
    { label: 'Formato', value: 'Permeável' },
    { label: 'Espessura', value: '9,5 cm' },
    { label: 'Dimensões', value: '2 opções' },
  ],
  unit: 'm²',
  lossMargin: 0.08, // A CONFIRMAR: sem margem de perda informada pela Blokasa para este modelo
  variants: [
    { label: '60 × 45 cm', uses: ['Estacionamentos', 'Jardins', 'Acessos', 'Calçadas', 'Áreas externas', 'Paisagismo'], piecesPerUnit: 3.7 },
    { label: '50 × 50 cm', uses: ['Estacionamentos', 'Jardins', 'Acessos', 'Calçadas', 'Áreas externas', 'Paisagismo'], piecesPerUnit: 4 },
  ],
  variantsCopy: {
    eyebrow: 'Dimensões Disponíveis',
    title: 'Rendimento por Dimensão',
    lead: 'Peças por m² aproximadas; a quantidade final depende da paginação e dos recortes de obra.',
  },
  techSheet: [
    { label: 'Material', value: 'Concreto' },
    { label: 'Formato', value: 'Permeável (concregrama)' },
    { label: 'Dimensões', value: '60×45×9,5 e 50×50×9,5 cm' },
    { label: 'Cores', value: 'Natural, Vermelho, Grafite, Amarelo e Terracota' },
    { label: 'Resistência', value: 'Não publicada pela Blokasa' },
    { label: 'Absorção de água', value: 'Não publicada pela Blokasa' },
  ],
  techSheetCopy: {
    lead: 'Medidas, formato e cores são confirmados pela Blokasa. Os ensaios de resistência e absorção ainda não foram publicados — fale com a nossa engenharia para o laudo mais recente.',
  },
}

export const pisosIntertravados: ProductPage[] = [retangular, sextavado, onda16Faces, grama]
