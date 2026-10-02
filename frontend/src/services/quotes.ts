import { company } from '../data/company'
import { categories, getProduct, products } from '../data/catalog'

export interface QuoteRequest {
  name: string
  phone: string
  email: string
  cityState: string
  projectType: string
  area: string
  model: string
  message: string
}

export const projectTypes = [
  'Residência / Garagem Particular',
  'Condomínio / Vias Internas',
  'Comercial / Estacionamento',
  'Industrial / Logística',
  'Obra Pública / Calçada',
  'Outro',
]

export const productOptions = products.map((p) => ({
  value: p.slug,
  label: p.name,
  group: categories[p.category],
}))

/** Tamanho máximo de cada campo: vai no `maxLength` dos inputs e é revalidado no envio (e, depois, na API). */
export const quoteLimits = {
  name: 120,
  phone: 15,
  email: 254,
  cityState: 120,
  area: 10,
  message: 1000,
} as const

const MAX_AREA_M2 = 1_000_000

// Caracteres de controle (exceto quebra de linha) não têm uso legítimo no pedido
// oxlint-disable-next-line no-control-regex
const controlChars = /[\u0000-\u0009\u000B-\u001F\u007F]/g

/** Remove caracteres de controle, espaços nas pontas e corta no limite do campo. */
export function sanitize(value: string, max: number, multiline = false) {
  const clean = value.replace(controlChars, '')
  return (multiline ? clean : clean.replace(/\s+/g, ' ')).trim().slice(0, max)
}

const parseArea = (area: string) => Number(area.replace(',', '.'))

/**
 * Enquanto a API .NET não existe, o pedido segue pelo WhatsApp da Blokasa com a mensagem pronta.
 * Na próxima etapa esta função passa a fazer POST /api/orcamentos e gravar no MySQL.
 */
export function buildWhatsAppQuote(q: QuoteRequest) {
  const product = getProduct(q.model)?.name ?? 'A definir'
  const area = sanitize(q.area, quoteLimits.area)
  const message = sanitize(q.message, quoteLimits.message, true)
  const lines = [
    'Olá! Gostaria de um orçamento.',
    '',
    `Nome: ${sanitize(q.name, quoteLimits.name)}`,
    `Telefone: ${sanitize(q.phone, quoteLimits.phone)}`,
    `E-mail: ${sanitize(q.email, quoteLimits.email)}`,
    `Cidade/UF da obra: ${sanitize(q.cityState, quoteLimits.cityState)}`,
    `Tipo de projeto: ${q.projectType}`,
    area ? `Metragem aproximada: ${area} m²` : null,
    `Produto: ${product}`,
    message ? `Observações: ${message}` : null,
  ].filter((l) => l !== null)

  return `${company.whatsapp.href}?text=${encodeURIComponent(lines.join('\n'))}`
}

export type QuoteErrors = Partial<Record<keyof QuoteRequest, string>>

export function validateQuote(q: QuoteRequest): QuoteErrors {
  const errors: QuoteErrors = {}
  const name = q.name.trim()
  const email = q.email.trim()
  const cityState = q.cityState.trim()
  const area = q.area.trim()

  if (name.length < 3 || name.length > quoteLimits.name) errors.name = 'Informe seu nome completo.'
  if (q.phone.replace(/\D/g, '').length < 10) errors.phone = 'Informe um telefone com DDD.'
  if (email.length > quoteLimits.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Informe um e-mail válido.'
  }
  if (cityState.length < 3 || cityState.length > quoteLimits.cityState) {
    errors.cityState = 'Informe a cidade e o estado da obra.'
  }
  if (area && !(parseArea(area) > 0 && parseArea(area) <= MAX_AREA_M2)) {
    errors.area = 'Informe a metragem em números.'
  }
  if (q.message.length > quoteLimits.message) {
    errors.message = `A mensagem pode ter até ${quoteLimits.message} caracteres.`
  }
  return errors
}

/** (11) 98765-4321 */
export function maskPhone(value: string) {
  const d = value.replace(/\D/g, '').slice(0, 11)
  if (d.length <= 2) return d.length ? `(${d}` : ''
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
}
