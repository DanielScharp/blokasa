import { colorHex, type Color } from '../../../data/catalog'
import type { SectionCopy } from '../../../data/produtos'
import { withCopy } from './copy'
import { ProductSection } from './ProductSection'
import styles from './Colors.module.css'

const defaultCopy = {
  eyebrow: 'Pigmentação Óxido de Ferro NBR',
  title: 'Cores Minerais Integradas na Massa',
  lead: 'Não é pintura superficial: a pigmentação é homogênea durante a dosagem do concreto, garantindo tonalidade consistente mesmo após abrasão e exposição solar severa.',
}

interface Props {
  colors: readonly Color[]
  copy?: SectionCopy
  alt: boolean
}

export function Colors({ colors, copy, alt }: Props) {
  return (
    <ProductSection id="cores" alt={alt} copy={withCopy(defaultCopy, copy)}>
      <div className={styles.grid}>
        {colors.map((c) => (
          <div key={c} className={styles.card} data-reveal="zoom">
            {/* Amostra em SVG: a cor vai no atributo `fill`, sem estilo inline (bloqueado pelo CSP) */}
            <svg className={styles.swatch} viewBox="0 0 1 1" preserveAspectRatio="none" aria-hidden>
              <rect width="1" height="1" fill={colorHex[c]} />
            </svg>
            <strong>{c}</strong>
            <span>Pigmento mineral</span>
          </div>
        ))}
      </div>
    </ProductSection>
  )
}
