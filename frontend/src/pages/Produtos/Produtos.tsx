import { CatalogProductCard } from '../../components/product/ProductCard'
import { SectionHeader } from '../../components/ui/SectionHeader'
import { useReveal } from '../../components/ui/useReveal'
import { categories, products, type CategoryId } from '../../data/catalog'
import { pageMeta } from '../../data/seo'
import styles from './Produtos.module.css'

export const meta = () =>
  pageMeta({
    title: 'Produtos | Blokasa Pisos Intertravados',
    description:
      'Catálogo completo da Blokasa: pisos intertravados, pisos e placas drenantes, guias e blocos de concreto, com medidas e cores. Orçamento direto de fábrica.',
    path: '/produtos',
  })

const groups = (Object.keys(categories) as CategoryId[])
  .map((id) => ({ id, name: categories[id], items: products.filter((p) => p.category === id) }))
  .filter((g) => g.items.length)

export default function Produtos() {
  useReveal()

  return (
    <>
      <section className={styles.intro} aria-labelledby="produtos-title">
        <div className="container">
          <p className={styles.eyebrow} data-intro="0">
            Catálogo completo
          </p>
          <h1 id="produtos-title" data-intro="1">
            Produtos Blokasa
          </h1>
          <p className={styles.lead} data-intro="2">
            Artefatos de concreto prensado para obras residenciais, comerciais e públicas. Escolha o modelo para ver a
            ficha técnica ou já incluí-lo no seu orçamento.
          </p>
          <nav className={styles.chips} aria-label="Categorias" data-intro="3">
            {groups.map((g) => (
              <a key={g.id} href={`#${g.id}`}>
                {g.name}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {groups.map((g, i) => (
        <section
          key={g.id}
          id={g.id}
          className={`${styles.section} ${i % 2 === 1 ? styles.alt : ''}`}
          aria-labelledby={`${g.id}-title`}
        >
          <div className={`container ${styles.inner}`}>
            <SectionHeader
              size="sm"
              id={`${g.id}-title`}
              eyebrow={`${g.items.length} ${g.items.length === 1 ? 'modelo' : 'modelos'}`}
              title={g.name}
            />
            <ul className={styles.grid}>
              {g.items.map((p) => (
                <CatalogProductCard key={p.slug} product={p} />
              ))}
            </ul>
          </div>
        </section>
      ))}
    </>
  )
}
