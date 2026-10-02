import type { ReactNode } from 'react'
import { SectionHeader } from '../../../components/ui/SectionHeader'
import type { SectionCopy } from '../../../data/produtos'
import styles from './ProductSection.module.css'

interface Props {
  id: string
  /** Fundo alternado; a página intercala automaticamente */
  alt?: boolean
  copy: Required<SectionCopy>
  children: ReactNode
}

/** Moldura comum das seções da página de produto: fundo, container e título. */
export function ProductSection({ id, alt, copy, children }: Props) {
  return (
    <section id={id} className={`${styles.section} ${alt ? styles.alt : ''}`} aria-labelledby={`${id}-title`}>
      <div className={`container ${styles.inner}`}>
        <SectionHeader size="sm" id={`${id}-title`} eyebrow={copy.eyebrow} title={copy.title} subtitle={copy.lead} />
        {children}
      </div>
    </section>
  )
}
