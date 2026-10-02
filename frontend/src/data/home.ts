// Textos da home. Os números, obras e depoimento abaixo vieram do Figma e ainda
// precisam ser confirmados pela Blokasa antes da publicação.

// Fotos dos cards já recortadas no formato do card (16:10), em vez de baixar a foto inteira
import catalog1 from '../assets/produtos/retangular-calcada.jpg?aspect=16:10&w=480;960&picture'
import catalog2 from '../assets/produtos/onda-16-faces-instalado.jpg?aspect=16:10&w=480;960&picture'
import catalog3 from '../assets/produtos/sextavado-instalado.jpg?aspect=16:10&w=480;960&picture'
import proj1 from '../assets/produtos/retangular-mix-de-cores.jpg?picture'
import proj2 from '../assets/home/proj-2.jpg?picture'
import proj3 from '../assets/home/proj-3.jpg?picture'
import proj4 from '../assets/home/proj-4.jpg?picture'
import proj5 from '../assets/home/proj-5.jpg?picture'

export const featuredProducts = [
  {
    slug: 'piso-intertravado-retangular',
    image: catalog1,
    title: 'Piso Intertravado Retangular',
    description:
      'Design linear limpo, juntas uniformes e versatilidade de paginações (espinha de peixe, dama ou amarração contínua). Ideal para calçadas, garagens e acessos residenciais.',
    tags: ['Veículos Leves & Médios', 'Áreas Externas', '5 Cores'],
  },
  {
    slug: 'piso-intertravado-onda-16-faces',
    image: catalog2,
    title: 'Piso Intertravado Onda 16 Faces',
    description:
      'Encaixe sinuoso que trava as peças nos dois sentidos e resiste a manobras de veículos. Indicado para pátios, estacionamentos e vias de tráfego intenso.',
    tags: ['Tráfego Pesado', 'Alta Aderência', 'Resistência Mecânica'],
  },
  {
    slug: 'piso-intertravado-sextavado',
    image: catalog3,
    title: 'Piso Intertravado Sextavado',
    description:
      'Formato hexagonal que valoriza projetos paisagísticos, praças e caminhos. Também disponível na versão drenante, para áreas que precisam absorver água da chuva.',
    tags: ['Visual Arquitetônico', 'Jardins & Praças', 'Versão Drenante'],
  },
]

export const projects = [
  {
    image: proj1,
    tag: 'Residencial Premium',
    title: 'Residência Alphaville Granja',
    text: 'Piso Retangular 6cm com mix de tonalidades natural e terracota em paginação corrida.',
  },
  {
    image: proj2,
    tag: 'Logística & Comercial',
    title: 'Centro de Distribuição Cajamar',
    text: 'Piso Onda 16 Faces 10cm com resistência a carretas bi-trem e empilhadeiras.',
  },
  {
    image: proj3,
    tag: 'Calçada Acessível',
    title: 'Passeio Corporativo Faria Lima',
    text: 'Superfície antiderrapante e alto conforto para fluxo de pedestres.',
  },
  {
    image: proj4,
    tag: 'Praça Urbana',
    title: 'Parque Central & Esplanada',
    text: 'Integração urbana com pisos drenantes e paginação contrastante.',
  },
  {
    image: proj5,
    tag: 'Paisagismo Residencial',
    title: 'Chácara Boa Vista',
    text: 'Desenho orgânico em sextavado com transição suave entre vegetação e caminhos.',
  },
]

export const metrics = [
  { value: '+350.000 m²', tone: 'primary', title: 'Pisos produzidos e entregues', text: 'Empreendimentos de grande porte em todo o estado.' },
  { value: '15 anos', tone: 'forest', title: 'Experiência e controle fabril', text: 'Laboratório próprio para ensaios mecânicos periódicos.' },
  { value: '100%', tone: 'gold', title: 'Conformidade NBR 9781', text: 'Rastreabilidade de lote e laudos técnicos disponíveis.' },
] as const

export const testimonial = {
  quote:
    'Especificamos os pisos retangulares da Blokasa para mais de 12.000 m² de vias e calçadas do Condomínio Quinta dos Lagos. A uniformidade das peças facilitou a produtividade do assentamento, sem quebras no transporte e com encaixe perfeito das juntas.',
  author: 'Eng. Roberto S. Mendonça',
  role: 'Diretor de Obras • Construtora Alfa Habitat',
}

export const faqs = [
  {
    q: 'Como calcular a quantidade de piso para minha área?',
    a: 'Meça comprimento x largura de cada ambiente e some as áreas. Informe a metragem no formulário: nossa equipe acrescenta a margem técnica de perdas (normalmente 5% a 10%, conforme recortes e paginação) e converte em peças e paletes.',
  },
  {
    q: 'Vocês atendem e entregam na minha cidade?',
    a: 'Atendemos São Paulo e região. Informe a cidade da obra no formulário para confirmarmos a rota e o valor do frete na proposta.',
  },
  {
    q: 'Qual espessura é recomendada para garagem e tráfego de carros?',
    a: 'Para garagens residenciais e veículos leves, 6cm atende bem. Para tráfego comercial e veículos médios, indicamos 8cm. Pátios com caminhões e carga pesada pedem 10cm (Onda 16 Faces).',
  },
  {
    q: 'O orçamento já contempla o frete e descarga?',
    a: 'Sim. A proposta traz o valor do material, o cálculo de paletes, o frete até a obra e as condições de descarga.',
  },
  {
    q: 'A empresa realiza a instalação ou indica assentadores qualificados?',
    a: 'Fale com a nossa equipe pelo WhatsApp ou telefone: orientamos sobre sub-base, assentamento e indicamos profissionais parceiros quando necessário.',
  },
  {
    q: 'É possível solicitar amostras físicas dos pisos?',
    a: 'Sim. Peça no campo de mensagem do formulário ou pelo WhatsApp e combinamos a retirada ou o envio das amostras.',
  },
]
