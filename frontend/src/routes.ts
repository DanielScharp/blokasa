import { index, layout, route, type RouteConfig } from '@react-router/dev/routes'

export default [
  layout('components/layout/Layout.tsx', [
    index('pages/Home/Home.tsx'),
    route('produtos', 'pages/Produtos/Produtos.tsx'),
    route('produtos/:slug', 'pages/Produto/Produto.tsx'),
    route('privacidade', 'pages/Privacidade/Privacidade.tsx'),
    route('*', 'pages/NotFound/NotFound.tsx'),
  ]),
] satisfies RouteConfig
