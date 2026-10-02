import { useId, useState } from 'react'
import type { ProductPage } from '../../../data/produtos'
import { withCopy } from './copy'
import { ProductSection } from './ProductSection'
import styles from './Simulator.module.css'

const defaultCopy = {
  eyebrow: 'Planejamento e Engenharia',
  title: 'Simulador Rápido de Quantitativo e Paletes',
  lead: 'Informe a quantidade da obra para estimar o volume de peças, a margem técnica de recorte e a quantidade de paletes de canteiro.',
}

const pt = (n: number, digits = 0) => n.toLocaleString('pt-BR', { maximumFractionDigits: digits })

/**
 * Peças, paletes e peso já com a margem de perda; os números de cada variação vêm de `page.variants`.
 * Paletes e peso ficam `null` quando o produto ainda não tem esse dado (mostra "A confirmar").
 */
function estimate(page: ProductPage, variantIndex: number, quantity: number) {
  const v = page.variants[variantIndex] ?? page.variants[0]
  const delivered = quantity * (1 + page.lossMargin)
  return {
    pieces: Math.ceil(delivered * v.piecesPerUnit),
    pallets: v.unitsPerPallet ? Math.ceil(delivered / v.unitsPerPallet) : null,
    tons: v.kgPerUnit ? (delivered * v.kgPerUnit) / 1000 : null,
  }
}

export function Simulator({ page, alt }: { page: ProductPage; alt: boolean }) {
  const id = useId()
  const [variant, setVariant] = useState(Math.max(0, page.variants.findIndex((v) => v.featured)))
  const [quantity, setQuantity] = useState('')
  const result = estimate(page, variant, Math.max(0, Number(quantity.replace(',', '.')) || 0))
  const margin = pt(page.lossMargin * 100, 1)
  const quantityLabel = page.unit === 'm' ? 'Metragem linear estimada (m)' : 'Área estimada (m²)'

  return (
    <ProductSection id="simulador" alt={alt} copy={withCopy(defaultCopy, page.simulatorCopy)}>
      <div className={styles.grid}>
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <label htmlFor={`${id}-variant`}>{page.variantLabel ?? 'Espessura'} do produto</label>
          <select id={`${id}-variant`} value={variant} onChange={(e) => setVariant(Number(e.target.value))}>
            {page.variants.map((v, i) => (
              <option key={v.label} value={i}>
                {v.traffic ? `${v.label} — ${v.traffic}` : v.label}
              </option>
            ))}
          </select>

          <label htmlFor={`${id}-qty`}>{quantityLabel}</label>
          <input
            id={`${id}-qty`}
            inputMode="decimal"
            maxLength={10}
            placeholder="Ex: 350"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </form>

        <div className={styles.results} aria-live="polite">
          <dl>
            <div>
              <dt>Peças (com {margin}% de margem)</dt>
              <dd>{pt(result.pieces)} un.</dd>
            </div>
            <div>
              <dt>Paletes estimados</dt>
              <dd>{result.pallets != null ? `${pt(result.pallets)} paletes` : 'A confirmar'}</dd>
            </div>
            <div>
              <dt>Peso total estimado</dt>
              <dd>{result.tons != null ? `${pt(result.tons, 1)} t` : 'A confirmar'}</dd>
            </div>
          </dl>
          <p className={styles.note}>
            Cálculo orientativo (considera {margin}% de margem técnica de recorte). O quantitativo final da obra é
            confirmado pela nossa engenharia.
          </p>
        </div>
      </div>
    </ProductSection>
  )
}
