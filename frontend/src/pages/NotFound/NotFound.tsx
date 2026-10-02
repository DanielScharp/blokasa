import { ButtonLink } from '../../components/ui/Button'
import styles from './NotFound.module.css'

export const meta = () => [{ title: 'Página não encontrada | Blokasa' }, { name: 'robots', content: 'noindex' }]

export function ErrorView({ title, text }: { title: string; text: string }) {
  return (
    <section className={`container ${styles.page}`}>
      <p className={styles.eyebrow}>Blokasa</p>
      <h1>{title}</h1>
      <p className={styles.text}>{text}</p>
      <div className={styles.actions}>
        <ButtonLink to="/">Voltar ao início</ButtonLink>
        <ButtonLink to="/#produtos" variant="soft">
          Ver produtos
        </ButtonLink>
      </div>
    </section>
  )
}

export default function NotFound() {
  return (
    <ErrorView
      title="Página não encontrada"
      text="O endereço pode ter mudado ou o produto não está mais no catálogo."
    />
  )
}
