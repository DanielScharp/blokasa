import ogImage from '../../assets/home/hero-bg.jpg?og'
import { useReveal } from '../../components/ui/useReveal'
import { pageMeta } from '../../data/seo'
import { QuoteSelectionProvider } from './quoteSelection'
import { Benefits } from './sections/Benefits'
import { Catalog } from './sections/Catalog'
import { Faq } from './sections/Faq'
import { Hero } from './sections/Hero'
import { Metrics } from './sections/Metrics'
import { Process } from './sections/Process'
import { Projects } from './sections/Projects'
import { QuoteForm } from './sections/QuoteForm'
import { TrustBar } from './sections/TrustBar'
import { UsageGuide } from './sections/UsageGuide'

export const meta = () =>
  pageMeta({
    title: 'Blokasa Pisos Intertravados | Orçamento de pisos de concreto',
    description:
      'Blokasa Pisos Intertravados: pisos intertravados, drenantes, guias e blocos de concreto direto de fábrica em São Paulo. Solicite seu orçamento.',
    path: '/',
    image: ogImage,
  })

export default function Home() {
  useReveal()

  return (
    <QuoteSelectionProvider>
      <Hero />
      <TrustBar />
      <Catalog />
      <UsageGuide />
      <Benefits />
      <Projects />
      <Process />
      <Metrics />
      <Faq />
      <QuoteForm />
    </QuoteSelectionProvider>
  )
}
