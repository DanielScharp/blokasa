import { Fragment, type ReactNode } from 'react'
import { data } from 'react-router'
import { useReveal } from '../../components/ui/useReveal'
import { getProduct, type Product } from '../../data/catalog'
import { getProductPage, productPath, type ProductPage } from '../../data/produtos'
import { productOgImage } from '../../data/produtos/images'
import { pageMeta } from '../../data/seo'
import NotFound from '../NotFound/NotFound'
import type { Route } from './+types/Produto'
import { Colors } from './sections/Colors'
import { Patterns } from './sections/Patterns'
import { ProductHero } from './sections/ProductHero'
import { ProductQuote } from './sections/ProductQuote'
import { Simulator } from './sections/Simulator'
import { TechSheet } from './sections/TechSheet'
import { Variants } from './sections/Variants'

function findProduct(slug: string) {
  const page = getProductPage(slug)
  const product = getProduct(slug)
  return page && product ? { page, product } : null
}

function loadProduct(slug: string) {
  if (!findProduct(slug)) throw data(null, { status: 404 })
  return { slug }
}

// `loader` roda no build (pré-render); `clientLoader`, na navegação pelo site e em URLs fora do pré-render
export const loader = ({ params }: Route.LoaderArgs) => loadProduct(params.slug)
export const clientLoader = ({ params }: Route.ClientLoaderArgs) => loadProduct(params.slug)

export const meta = ({ loaderData }: Route.MetaArgs) => {
  const found = loaderData && findProduct(loaderData.slug)
  if (!found) return []
  const { page } = found
  return pageMeta({
    title: page.seo.title,
    description: page.seo.description,
    path: productPath(page.slug),
    image: page.gallery[0] && productOgImage(page.gallery[0].file),
  })
}

/** Seções opcionais aparecem só quando o produto tem o dado; o fundo alterna entre as que existem. */
function sections(page: ProductPage, product: Product) {
  const { patterns } = page
  const list: ((alt: boolean) => ReactNode)[] = [(alt) => <Variants page={page} alt={alt} />]
  if (patterns?.length) list.push((alt) => <Patterns patterns={patterns} copy={page.patternsCopy} alt={alt} />)
  if (product.colors.length > 1) list.push((alt) => <Colors colors={product.colors} copy={page.colorsCopy} alt={alt} />)
  list.push((alt) => <TechSheet page={page} alt={alt} />)
  list.push((alt) => <Simulator page={page} alt={alt} />)
  return list.map((render, i) => <Fragment key={i}>{render(i % 2 === 1)}</Fragment>)
}

function ProductView({ page, product }: { page: ProductPage; product: Product }) {
  useReveal()

  return (
    <>
      <ProductHero page={page} product={product} />
      {sections(page, product)}
      <ProductQuote product={product} />
    </>
  )
}

export default function Produto({ loaderData }: Route.ComponentProps) {
  const found = findProduct(loaderData.slug)
  if (!found) return <NotFound />
  // `key` zera simulador, galeria e formulário ao trocar de um produto para outro
  return <ProductView key={loaderData.slug} {...found} />
}
