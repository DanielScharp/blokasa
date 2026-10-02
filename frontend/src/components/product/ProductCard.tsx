import { Link } from 'react-router'
import { formatMeasure, formatThicknesses, type Product } from '../../data/catalog'
import { hasProductPage, productPath } from '../../data/produtos'
import { catalogCard } from '../../data/produtos/cards'
import { productPicture } from '../../data/produtos/images'
import { asset } from '../ui/asset'
import { Picture, type PictureSource } from '../ui/Picture'
import styles from './ProductCard.module.css'

interface Props {
  product: Product
  title?: string
  description: string
  tags: string[]
  image?: PictureSource
  /** Foto de peça recortada: aparece inteira, sem corte */
  cutout?: boolean
}

// Pisos e placas variam na espessura; guias e blocos, nas dimensões
function badge(product: Product) {
  const { category, measures } = product
  if (category !== 'guias' && category !== 'blocos') return `Espessuras: ${formatThicknesses(product)}`
  const more = measures.length > 1 ? ` +${measures.length - 1}` : ''
  return `${formatMeasure(measures[0])}${more}`
}

/** Card de produto: leva à ficha técnica quando o produto tem página, senão ao orçamento com o modelo marcado. */
export function ProductCard({ product, title = product.name, description, tags, image, cutout }: Props) {
  const hasPage = hasProductPage(product.slug)

  return (
    <li className={styles.card} data-reveal="zoom">
      <div className={`${styles.media} ${cutout ? styles.cutout : ''}`}>
        {image ? (
          <Picture picture={image} alt={title} sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 400px" />
        ) : (
          <span className={styles.placeholder} aria-hidden />
        )}
        <span className={styles.badge}>{badge(product)}</span>
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{description}</p>
        <ul className={styles.tags}>
          {tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
      <div className={styles.footer}>
        <Link
          to={hasPage ? productPath(product.slug) : `/?modelo=${product.slug}#orcamento`}
          className={styles.specify}
        >
          {hasPage ? 'Ver ficha técnica completa' : 'Especificar no orçamento'}
          <img src={asset('home/icon-arrow-right.svg')} alt="" width={12} height={12} />
        </Link>
      </div>
    </li>
  )
}

/** Card a partir só do catálogo (foto de recorte, medidas e cores). */
export function CatalogProductCard({ product }: { product: Product }) {
  const { imageFile, description, tags } = catalogCard(product)
  return (
    <ProductCard
      product={product}
      description={description}
      tags={tags}
      image={imageFile ? productPicture(imageFile) : undefined}
      cutout
    />
  )
}
