import { SectionHeader } from '../../../components/ui/SectionHeader'
import type { ProductPage } from '../../../data/produtos'
import { withCopy } from './copy'
import sectionStyles from './ProductSection.module.css'
import styles from './TechSheet.module.css'

const defaultCopy = {
  eyebrow: 'Laudos e Padrões Oficiais',
  title: 'Ficha Técnica Industrial & Logística',
  lead: 'Produzido em ambiente fabril automatizado, com controle granulométrico contínuo e ensaios periódicos de compressão diametral e absorção de água.',
}

export function TechSheet({ page, alt }: { page: ProductPage; alt: boolean }) {
  const copy = withCopy(defaultCopy, page.techSheetCopy)

  return (
    <section
      id="ficha-tecnica"
      className={`${sectionStyles.section} ${alt ? sectionStyles.alt : ''}`}
      aria-labelledby="ficha-tecnica-title"
    >
      <div className={`container ${styles.grid}`}>
        <div className={styles.main}>
          <SectionHeader size="sm" id="ficha-tecnica-title" eyebrow={copy.eyebrow} title={copy.title} subtitle={copy.lead} />
          <table className={styles.table}>
            <tbody>
              {page.techSheet.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  <td>{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.card} data-reveal="right">
          {page.logistics && (
            <div>
              <h3>{page.logistics.title}</h3>
              <p>{page.logistics.text}</p>
            </div>
          )}
          {page.documents?.length ? (
            <>
              <p className={styles.kicker}>Documentação para download</p>
              <div className={styles.docs}>
                {page.documents.map((d) => (
                  <a key={d.href} href={d.href} download>
                    {d.label}
                  </a>
                ))}
              </div>
            </>
          ) : (
            <>
              <p className={styles.kicker}>Ficha técnica, CAD e BIM</p>
              <p>Enviamos a ficha técnica em PDF e os arquivos CAD/BIM junto com a proposta.</p>
              <div className={styles.docs}>
                <a href="#orcamento">Solicitar documentação</a>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
