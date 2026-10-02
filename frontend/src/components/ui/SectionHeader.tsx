import type { ReactNode } from 'react'
import styles from './SectionHeader.module.css'

interface Props {
  eyebrow: string
  title: ReactNode
  subtitle?: ReactNode
  align?: 'left' | 'center'
  eyebrowTone?: 'primary' | 'forest'
  /** `sm`: títulos menores, usados nas seções das páginas de produto */
  size?: 'md' | 'sm'
  id?: string
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  eyebrowTone = 'primary',
  size = 'md',
  id,
}: Props) {
  return (
    <header className={`${styles.header} ${align === 'center' ? styles.center : ''} ${size === 'sm' ? styles.sm : ''}`}>
      <p data-reveal className={`${styles.eyebrow} ${eyebrowTone === 'forest' ? styles.eyebrowForest : ''}`}>
        {eyebrow}
      </p>
      <h2 data-reveal id={id} className={styles.title}>
        {title}
      </h2>
      {subtitle && (
        <p data-reveal className={styles.subtitle}>
          {subtitle}
        </p>
      )}
    </header>
  )
}
