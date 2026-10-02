import type { ProductPage } from '../../../data/produtos'
import { withCopy } from './copy'
import { ProductSection } from './ProductSection'
import styles from './Variants.module.css'

const defaultCopy = {
  eyebrow: 'Classificação estrutural',
  title: 'Espessuras de Fabricação & Capacidade de Carga',
  lead: 'Escolha a variação conforme o uso: cada uma atende a um nível de carga e de tráfego.',
}

export function Variants({ page, alt }: { page: ProductPage; alt: boolean }) {
  return (
    <ProductSection id="variacoes" alt={alt} copy={withCopy(defaultCopy, page.variantsCopy)}>
      <div className={styles.grid}>
        {page.variants.map((v) => (
          <div key={v.label} className={`${styles.card} ${v.featured ? styles.featured : ''}`} data-reveal="zoom">
            {v.featured && <span className={styles.badge}>Mais Especificado</span>}
            <span className={styles.value}>{v.label}</span>
            {v.traffic && <span className={styles.traffic}>{v.traffic}</span>}
            {v.resistance && <span className={styles.resistance}>Resistência: {v.resistance}</span>}
            {v.uses && (
              <ul className={styles.uses}>
                {v.uses.map((u) => (
                  <li key={u}>{u}</li>
                ))}
              </ul>
            )}
            {v.kgPerUnit != null && (
              <span className={styles.weight}>
                Peso aproximado: ≈ {v.kgPerUnit.toLocaleString('pt-BR')} kg/{page.unit}
              </span>
            )}
          </div>
        ))}
      </div>
    </ProductSection>
  )
}
