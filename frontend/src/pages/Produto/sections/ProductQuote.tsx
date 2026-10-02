import { Link } from 'react-router'
import { useQuoteForm } from '../../../components/quote/useQuoteForm'
import { Button } from '../../../components/ui/Button'
import type { Product } from '../../../data/catalog'
import type { QuoteRequest } from '../../../services/quotes'
import styles from './ProductQuote.module.css'

export function ProductQuote({ product }: { product: Product }) {
  const { errors, errorId, field, onSubmit, sentUrl, reset } = useQuoteForm(
    {
      name: '',
      phone: '',
      email: '',
      cityState: '',
      projectType: 'Especificação técnica',
      area: '',
      model: product.slug,
      message: '',
    },
    'pq',
  )

  const error = (key: keyof QuoteRequest) =>
    errors[key] && (
      <small id={errorId(key)} className={styles.error}>
        {errors[key]}
      </small>
    )

  return (
    <section id="orcamento" className={styles.section} aria-labelledby="orcamento-title">
      <div className="container">
        <div className={styles.card} data-reveal="zoom">
          <p className={styles.eyebrow}>Cotação direta de fábrica</p>
          <h2 id="orcamento-title" className={styles.title}>
            Solicitar Proposta Técnica e Memorial Descritivo
          </h2>
          <p className={styles.lead}>
            Atendimento consultivo para engenheiros, arquitetos, loteadoras, construtoras e proprietários. Retorno
            formal com frete para o canteiro em até 24 horas úteis.
          </p>

          {sentUrl ? (
            <div className={styles.success} role="status">
              <p>
                Pedido pronto! Abrimos o WhatsApp da Blokasa com os dados da sua especificação. Se não abriu,{' '}
                <a href={sentUrl} target="_blank" rel="noreferrer">
                  clique aqui
                </a>
                .
              </p>
              <Button variant="glass" onClick={reset}>
                Fazer outro pedido
              </Button>
            </div>
          ) : (
            <form className={styles.form} onSubmit={onSubmit} noValidate>
              <span className={`${styles.selected} ${styles.full}`}>Produto selecionado: {product.name}</span>

              <label>
                Nome completo *
                <input autoComplete="name" {...field('name')} />
                {error('name')}
              </label>
              <label>
                E-mail corporativo *
                <input type="email" autoComplete="email" {...field('email')} />
                {error('email')}
              </label>
              <label>
                WhatsApp / Telefone *
                <input type="tel" inputMode="tel" autoComplete="tel" {...field('phone')} />
                {error('phone')}
              </label>
              <label>
                Cidade e UF da obra *
                <input {...field('cityState')} />
                {error('cityState')}
              </label>
              <label>
                Metragem prevista da área (m²)
                <input inputMode="decimal" {...field('area')} />
                {error('area')}
              </label>
              <label className={styles.full}>
                Observações técnicas, paginação pretendida ou restrições do canteiro
                <textarea {...field('message')} />
                {error('message')}
              </label>

              <div className={`${styles.full} ${styles.submitRow}`}>
                <Button type="submit" size="lg" className={styles.submit}>
                  Enviar Solicitação Formal de Cotação
                </Button>
                <span className={styles.note}>Sem compromisso de compra • Resposta rápida da engenharia</span>
              </div>
              <p className={`${styles.full} ${styles.note}`}>
                Seus dados são usados apenas para responder a este orçamento.{' '}
                <Link to="/privacidade">Política de Privacidade</Link>
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
