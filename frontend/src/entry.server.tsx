import { prerender } from 'react-dom/static'
import { ServerRouter, type EntryContext } from 'react-router'

/**
 * Usado só no build, para gerar o HTML das páginas pré-renderizadas (não há servidor Node em produção).
 * Substitui o entry padrão, que exigiria @react-router/node e isbot como dependências.
 * `prerender` espera todo o conteúdo (inclusive os dados de hidratação) antes de devolver o HTML.
 */
export default async function handleRequest(
  request: Request,
  status: number,
  headers: Headers,
  context: EntryContext,
) {
  const { prelude } = await prerender(<ServerRouter context={context} url={request.url} />)
  headers.set('Content-Type', 'text/html; charset=utf-8')
  return new Response(prelude, { status, headers })
}
