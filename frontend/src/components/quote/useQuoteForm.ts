import { useState, type ChangeEvent, type FormEvent } from 'react'
import {
  buildWhatsAppQuote,
  maskPhone,
  quoteLimits,
  validateQuote,
  type QuoteErrors,
  type QuoteRequest,
} from '../../services/quotes'

type Field = keyof QuoteRequest
type FieldElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement

/**
 * Estado, validação e envio (WhatsApp) do formulário de orçamento, usado na home e nas páginas de produto.
 * `field(key)` devolve as props do campo: id, valor, limite de tamanho e atributos de acessibilidade do erro.
 */
export function useQuoteForm(initial: QuoteRequest, idPrefix = 'q') {
  const [form, setForm] = useState<QuoteRequest>(initial)
  const [errors, setErrors] = useState<QuoteErrors>({})
  const [sentUrl, setSentUrl] = useState<string | null>(null)

  const fieldId = (key: Field) => `${idPrefix}-${key}`
  const errorId = (key: Field) => `${idPrefix}-${key}-err`

  const set = (key: Field) => (e: ChangeEvent<FieldElement>) => {
    const value = key === 'phone' ? maskPhone(e.target.value) : e.target.value
    setForm((f) => ({ ...f, [key]: value }))
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }))
  }

  const field = (key: Field) => ({
    id: fieldId(key),
    name: key,
    value: form[key],
    maxLength: key in quoteLimits ? quoteLimits[key as keyof typeof quoteLimits] : undefined,
    onChange: set(key),
    'aria-invalid': !!errors[key] || undefined,
    'aria-describedby': errors[key] ? errorId(key) : undefined,
  })

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const found = validateQuote(form)
    setErrors(found)
    const first = Object.keys(found)[0] as Field | undefined
    if (first) {
      document.getElementById(fieldId(first))?.focus()
      return
    }
    const url = buildWhatsAppQuote(form)
    window.open(url, '_blank', 'noopener')
    setSentUrl(url)
  }

  return { form, setForm, errors, errorId, field, onSubmit, sentUrl, reset: () => setSentUrl(null) }
}
