import professionalMan from '../../../assets/home/professional-man.jpg?w=160&picture'
import { Picture } from '../../../components/ui/Picture'
import { metrics, testimonial } from '../../../data/home'
import styles from './Metrics.module.css'

export function Metrics() {
  return (
    <section id="sobre" className={styles.section} aria-label="Sobre a Blokasa">
      <div className={`container ${styles.inner}`}>
        <dl className={styles.metrics}>
          {metrics.map((m) => (
            <div key={m.title} className={styles.metric} data-reveal>
              <dt className={styles.srOnlyWrap}>
                <span className={`${styles.value} ${styles[m.tone]}`}>{m.value}</span>
                <span className={styles.title}>{m.title}</span>
              </dt>
              <dd className={styles.text}>{m.text}</dd>
            </div>
          ))}
        </dl>

        <figure className={styles.testimonial} data-reveal="zoom">
          <span className={styles.quoteIcon} aria-hidden>
            <Picture picture={professionalMan} alt="" sizes="80px" />
          </span>
          <div className={styles.quoteBody}>
            <blockquote className={styles.quote}>"{testimonial.quote}"</blockquote>
            <figcaption>
              <strong className={styles.author}>{testimonial.author}</strong>
              <span className={styles.role}>{testimonial.role}</span>
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  )
}
