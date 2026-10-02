import { useLayoutEffect, type ReactNode } from 'react'
import { isRouteErrorResponse, Outlet, useLocation } from 'react-router'
import NotFound, { ErrorView } from '../../pages/NotFound/NotFound'
import type { Route } from './+types/Layout'
import { Footer } from './Footer'
import { Header } from './Header'
import { WhatsAppButton } from './WhatsAppButton'

/**
 * Ao trocar de página, o <ScrollRestoration> vai para o topo (ou para a âncora) sem a rolagem suave
 * do CSS; âncoras dentro da mesma página continuam suaves. Roda antes do efeito do ScrollRestoration.
 */
function useInstantScrollOnNavigate() {
  const { pathname } = useLocation()
  useLayoutEffect(() => {
    const html = document.documentElement
    html.style.scrollBehavior = 'auto'
    // Força o recálculo do estilo: sem isso o Chrome ainda usa o `smooth` no scrollTo logo em seguida
    void getComputedStyle(html).scrollBehavior
    const frame = requestAnimationFrame(() => html.style.removeProperty('scroll-behavior'))
    return () => cancelAnimationFrame(frame)
  }, [pathname])
}

function Shell({ children }: { children: ReactNode }) {
  useInstantScrollOnNavigate()
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default function Layout() {
  return (
    <Shell>
      <Outlet />
    </Shell>
  )
}

/** Produto inexistente (404) ou erro inesperado: mantém cabeçalho e rodapé. */
export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  return (
    <Shell>
      {isRouteErrorResponse(error) && error.status === 404 ? (
        <NotFound />
      ) : (
        <ErrorView
          title="Algo deu errado"
          text="Não conseguimos carregar esta página. Tente novamente ou fale com a nossa equipe pelo WhatsApp."
        />
      )}
    </Shell>
  )
}
