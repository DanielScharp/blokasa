import { CatalogProductCard } from '../../../components/product/ProductCard'
import { categories, type Product } from '../../../data/catalog'
import { ProductSection } from './ProductSection'
import styles from './RelatedProducts.module.css'

/** Outros produtos da mesma categoria que já têm página própria. */
export function RelatedProducts({ related, current, alt }: { related: Product[]; current: Product; alt: boolean }) {
  return (
    <ProductSection
      id="relacionados"
      alt={alt}
      copy={{
        eyebrow: categories[current.category],
        title: 'Outros modelos da linha',
        lead: 'Compare geometrias e espessuras antes de fechar a especificação.',
      }}
    >
      <ul className={styles.grid}>
        {related.map((p) => (
          <CatalogProductCard key={p.slug} product={p} />
        ))}
      </ul>
    </ProductSection>
  )
}
