import { useState } from 'react'
import { Link } from 'react-router'
import { useQuoteForm } from '../../../components/quote/useQuoteForm'
import { asset } from '../../../components/ui/asset'
import { Button } from '../../../components/ui/Button'
import { featuredProducts } from '../../../data/home'
import { productOptions, projectTypes, type QuoteRequest } from '../../../services/quotes'
import { useQuoteSelection } from '../useQuoteSelection'
import styles from './QuoteForm.module.css'

const quickModels = [
  { value: featuredProducts[0].slug, label: 'Retangular' },
  { value: featuredProducts[1].slug, label: 'Onda 16 Faces' },
  { value: featuredProducts[2].slug, label: 'Sextavado' },
  { value: 'outro', label: 'Outro / A definir' },
]

const empty: QuoteRequest = {
  name: '',
  phone: '',
  email: '',
  cityState: '',
  projectType: projectTypes[0],
  area: '',
  model: quickModels[0].value,
  message: '',
}

const groups = [...new Set(productOptions.map((o) => o.group))]

export function QuoteForm() {
  const { model: selected } = useQuoteSelection()
  const { form, setForm, errors, errorId, field, onSubmit, sentUrl, reset } = useQuoteForm(empty)

  const isQuick = quickModels.some((m) => m.value === form.model)
  const radioValue = isQuick ? form.model : 'outro'

  // Card do catálogo clicado: já marca o modelo no formulário
  const [appliedSelection, setAppliedSelection] = useState(selected)
  if (selected !== appliedSelection) {
    setAppliedSelection(selected)
    if (selected) setForm((f) => ({ ...f, model: selected }))
  }

  const error = (key: keyof QuoteRequest) =>
    errors[key] && (
      <span id={errorId(key)} className={styles.error}>
        {errors[key]}
      </span>
    )

  return (
    <section id="orcamento" className={styles.section} aria-labelledby="orcamento-title">
      <div className="container">
        <div className={styles.card} data-reveal="zoom">
          <span className={styles.glow} aria-hidden />

          <header className={styles.header}>
            <p className={styles.badge}>Cotação direta de fábrica</p>
            <h2 id="orcamento-title" className={styles.title}>
              Vamos encontrar o piso ideal para a sua obra.
            </h2>
            <p className={styles.subtitle}>
              Envie as informações básicas da sua demanda. Nossa equipe técnica retorna com a orientação inicial e
              proposta sob medida.
            </p>
          </header>

          {sentUrl ? (
            <div className={styles.success} role="status">
              <h3>Pedido pronto para envio!</h3>
              <p>
                Abrimos o WhatsApp da Blokasa com os dados do seu orçamento. Se a janela não abriu,{' '}
                <a href={sentUrl} target="_blank" rel="noreferrer">
                  clique aqui para enviar
                </a>
                .
              </p>
              <Button variant="glass" onClick={reset}>
                Fazer outro orçamento
              </Button>
            </div>
          ) : (
            <form className={styles.form} onSubmit={onSubmit} noValidate>
              <label className={styles.field}>
                <span className={styles.label}>Nome completo *</span>
                <input className={styles.input} autoComplete="name" placeholder="Ex: Carlos Albuquerque" {...field('name')} />
                {error('name')}
              </label>

              <label className={styles.field}>
                <span className={styles.label}>WhatsApp / Telefone *</span>
                <input
                  className={styles.input}
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="(11) 98765-4321"
                  {...field('phone')}
                />
                {error('phone')}
              </label>

              <label className={styles.field}>
                <span className={styles.label}>E-mail para envio da proposta *</span>
                <input
                  className={styles.input}
                  type="email"
                  autoComplete="email"
                  placeholder="carlos@empresa.com.br"
                  {...field('email')}
                />
                {error('email')}
              </label>

              <label className={styles.field}>
                <span className={styles.label}>Cidade e Estado da obra *</span>
                <input className={styles.input} placeholder="Ex: São Paulo / SP" {...field('cityState')} />
                {error('cityState')}
              </label>

              <label className={styles.field}>
                <span className={styles.label}>Tipo de projeto</span>
                <select className={`${styles.input} ${styles.select}`} {...field('projectType')}>
                  {projectTypes.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </label>

              <label className={styles.field}>
                <span className={styles.label}>Metragem aproximada (m²)</span>
                <span className={styles.suffixWrap}>
                  <input className={styles.input} inputMode="decimal" placeholder="Ex: 250" {...field('area')} />
                  <span className={styles.suffix}>m²</span>
                </span>
                {error('area')}
              </label>

              <fieldset className={`${styles.field} ${styles.full} ${styles.fieldset}`}>
                <legend className={styles.label}>Modelo de preferência</legend>
                <div className={styles.radios}>
                  {quickModels.map((m) => (
                    <label key={m.value} className={styles.radio}>
                      <input
                        type="radio"
                        name="model"
                        value={m.value}
                        checked={radioValue === m.value}
                        onChange={() => setForm((f) => ({ ...f, model: m.value }))}
                      />
                      <span>{m.label}</span>
                    </label>
                  ))}
                </div>
                {!isQuick && (
                  <select
                    className={`${styles.input} ${styles.select} ${styles.other}`}
                    aria-label="Escolha o produto"
                    value={form.model}
                    onChange={(e) => setForm((f) => ({ ...f, model: e.target.value }))}
                  >
                    <option value="outro">Ainda não sei / quero orientação</option>
                    {groups.map((g) => (
                      <optgroup key={g} label={g}>
                        {productOptions
                          .filter((o) => o.group === g)
                          .map((o) => (
                            <option key={o.value} value={o.value}>
                              {o.label}
                            </option>
                          ))}
                      </optgroup>
                    ))}
                  </select>
                )}
              </fieldset>

              <label className={`${styles.field} ${styles.full}`}>
                <span className={styles.label}>Mensagem ou particularidades da obra (opcional)</span>
                <textarea
                  className={`${styles.input} ${styles.textarea}`}
                  rows={3}
                  placeholder="Descreva detalhes como inclinação de terreno, previsão de início ou solicitação de amostras físicas."
                  {...field('message')}
                />
              </label>

              <div className={`${styles.full} ${styles.submitRow}`}>
                <Button type="submit" size="lg" icon={asset('home/send.svg')} className={styles.submit}>
                  Solicitar orçamento sem compromisso
                </Button>
                <p className={styles.note}>Retornamos com proposta formal e dimensionamento técnico.</p>
              </div>
              <p className={`${styles.full} ${styles.privacy}`}>
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
