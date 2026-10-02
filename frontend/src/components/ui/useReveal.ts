import { useLayoutEffect } from 'react'

const STEP_MS = 90
const MAX_STEPS = 5

// A primeira execução acontece na hidratação do HTML pré-renderizado, que já está pintado na tela
let hydrating = true

/**
 * Revela com animação os elementos `[data-reveal]` ao entrarem na viewport.
 * Elementos irmãos são escalonados automaticamente; `data-reveal-delay` (ms) soma um atraso base.
 * Na hidratação, o que já está visível fica como está (escondê-lo para animar faria a tela piscar).
 */
export function useReveal() {
  useLayoutEffect(() => {
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      typeof IntersectionObserver === 'undefined'
    ) {
      return
    }

    const root = document.documentElement
    let els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))

    if (hydrating) {
      hydrating = false
      els = els.filter((el) => {
        if (el.getBoundingClientRect().top >= window.innerHeight) return true
        el.removeAttribute('data-reveal')
        return false
      })
    }

    els.forEach((el) => {
      const siblings = Array.from(el.parentElement?.children ?? []).filter((c) => c.hasAttribute('data-reveal'))
      const base = Number(el.dataset.revealDelay ?? 0)
      const step = Math.min(siblings.indexOf(el), MAX_STEPS)
      el.style.setProperty('--reveal-delay', `${base + step * STEP_MS}ms`)
    })

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          io.unobserve(entry.target)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )

    root.classList.add('reveal-on')
    els.forEach((el) => io.observe(el))

    return () => {
      io.disconnect()
      root.classList.remove('reveal-on')
      els.forEach((el) => el.classList.remove('is-visible'))
    }
  }, [])
}
