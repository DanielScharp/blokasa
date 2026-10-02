import type { Pattern, SectionCopy } from '../../../data/produtos'
import { withCopy } from './copy'
import { ProductSection } from './ProductSection'
import styles from './Patterns.module.css'

const defaultCopy = {
  eyebrow: 'Caderno de Paginação e Travamento',
  title: 'Paginações Recomendadas',
  lead: 'Conheça o comportamento estrutural de cada padrão antes de detalhar o projeto executivo.',
}

interface Props {
  patterns: Pattern[]
  copy?: SectionCopy
  alt: boolean
}

export function Patterns({ patterns, copy, alt }: Props) {
  return (
    <ProductSection id="paginacoes" alt={alt} copy={withCopy(defaultCopy, copy)}>
      <div className={styles.grid}>
        {patterns.map((p) => (
          <div key={p.name} className={styles.card} data-reveal="zoom">
            <div className={styles.swatch} aria-hidden />
            <h3>{p.name}</h3>
            <p>{p.text}</p>
            <span className={styles.tag}>{p.tag}</span>
          </div>
        ))}
      </div>
    </ProductSection>
  )
}
