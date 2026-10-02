import type { SectionCopy } from '../../../data/produtos'

/** Junta o texto padrão da seção com o que o produto sobrescreve. */
export const withCopy = (defaults: Required<SectionCopy>, custom?: SectionCopy): Required<SectionCopy> => ({
  ...defaults,
  ...custom,
})
