import { useState } from 'react'
import { Link } from 'react-router'
import { ButtonLink } from '../../../components/ui/Button'
import { Picture } from '../../../components/ui/Picture'
import { categories, type Product } from '../../../data/catalog'
import { company } from '../../../data/company'
import type { ProductPage } from '../../../data/produtos'
import { productPicture } from '../../../data/produtos/images'
import styles from './ProductHero.module.css'

interface Props {
  page: ProductPage
  product: Product
}

function Gallery({ images }: { images: ProductPage['gallery'] }) {
  const [active, setActive] = useState(0)
  const main = images[active]

  return (
    <div className={styles.gallery} data-intro="0">
      <figure className={`${styles.mainImage} ${main?.cutout ? styles.cutout : ''}`}>
        {main && (
          <Picture
            picture={productPicture(main.file)}
            alt={main.alt}
            sizes="(max-width: 1023px) 100vw, 640px"
            loading="eager"
            fetchPriority={active === 0 ? 'high' : undefined}
          />
        )}
        {main?.caption && <figcaption>{main.caption}</figcaption>}
      </figure>

      {images.length > 1 && (
        <div className={styles.thumbs}>
          {images.map((img, i) => (
            <button
              key={img.file}
              type="button"
              className={`${styles.thumb} ${img.cutout ? styles.cutout : ''}`}
              aria-label={`Ver foto: ${img.alt}`}
              aria-pressed={i === active}
              onClick={() => setActive(i)}
            >
              <Picture picture={productPicture(img.file)} alt="" sizes="160px" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export function ProductHero({ page, product }: Props) {
  // Produto só em Natural: a cor entra na linha de especificações (não há seção de cores)
  const highlights =
    product.colors.length === 1 ? [...page.highlights, { label: 'Cor', value: product.colors[0] }] : page.highlights

  return (
    <>
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <ol className="container">
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/#produtos">{categories[product.category]}</Link>
          </li>
          <li aria-current="page">{product.name}</li>
        </ol>
      </nav>

      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <Gallery images={page.gallery} />

          <div className={styles.heroInfo}>
            <span className={styles.tag} data-intro="1">
              {page.line}
            </span>
            <h1 data-intro="2">{page.title}</h1>
            <p className={styles.subtitle} data-intro="3">
              {page.subtitle}
            </p>
            <p className={styles.text} data-intro="4">
              {page.description}
            </p>

            <dl className={styles.specRow} data-intro="5">
              {highlights.map((h) => (
                <div key={h.label}>
                  <dt>{h.label}</dt>
                  <dd>{h.value}</dd>
                </div>
              ))}
            </dl>

            <div className={styles.actions} data-intro="6">
              <ButtonLink href="#orcamento">Incluir no Orçamento da Obra</ButtonLink>
              <ButtonLink href="#simulador" variant="soft">
                Simular {page.unit}
              </ButtonLink>
            </div>
            <p className={styles.foot} data-intro="7">
              Dúvida técnica sobre este modelo?{' '}
              <a href={company.phone.href}>Suporte de Engenharia de Aplicação — {company.phone.display}</a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
