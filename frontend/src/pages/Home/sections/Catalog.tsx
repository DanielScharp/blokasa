import { ProductCard } from '../../../components/product/ProductCard'
import { ButtonLink } from '../../../components/ui/Button'
import { SectionHeader } from '../../../components/ui/SectionHeader'
import { getProduct } from '../../../data/catalog'
import { featuredProducts } from '../../../data/home'
import styles from './Catalog.module.css'

export function Catalog() {
  return (
    <section id="produtos" className={styles.section} aria-labelledby="produtos-title">
      <div className={`container ${styles.inner}`}>
        <SectionHeader
          id="produtos-title"
          eyebrow="Linha de produtos"
          title="Pisos intertravados de alta durabilidade"
          subtitle="Produção industrial calibrada em prensas hidráulicas com agregados minerais selecionados e rigoroso controle tecnológico."
        />

        <ul className={styles.grid}>
          {featuredProducts.map((item) => {
            const product = getProduct(item.slug)
            return (
              product && (
                <ProductCard
                  key={item.slug}
                  product={product}
                  title={item.title}
                  description={item.description}
                  tags={item.tags}
                  image={item.image}
                />
              )
            )
          })}
        </ul>

        <ButtonLink to="/produtos" variant="forest" className={styles.all}>
          Ver catálogo completo
        </ButtonLink>
      </div>
    </section>
  )
}
