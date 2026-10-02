import '@fontsource-variable/manrope/wght.css'
import '@fontsource-variable/plus-jakarta-sans/wght.css'
import '@fontsource-variable/plus-jakarta-sans/wght-italic.css'
import type { ReactNode } from 'react'
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router'
import './styles/global.css'

/** Documento HTML de todas as páginas (substitui o antigo index.html). */
export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta name="theme-color" content="#394334" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}

// Página fora do pré-render (404.html) enquanto o JavaScript carrega
export function HydrateFallback() {
  return null
}
