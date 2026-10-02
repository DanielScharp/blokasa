import { reactRouter } from '@react-router/dev/vite'
import { defineConfig } from 'vite'
import { imagetools } from 'vite-imagetools'

const pictureWidths = [480, 960, 1600]

/**
 * `import foto from './foto.jpg?picture'` gera AVIF/WebP em até 3 larguras (nunca maiores que o original),
 * com fallback em JPEG, ou PNG se a imagem tiver transparência, e devolve o objeto que o <Picture> espera.
 * Parâmetros na URL (ex.: `?w=640;1280&picture`) substituem os padrões.
 */
const pictureDefaults = (width: number, hasAlpha: boolean) => {
  const widths = pictureWidths.filter((w) => w <= width)
  return {
    as: 'picture',
    format: `avif;webp;${hasAlpha ? 'png' : 'jpg'}`,
    w: (widths.length ? widths : [width]).join(';'),
  }
}

/** `import capa from './foto.jpg?og'` gera a imagem de prévia de link (1200x630) e devolve a URL. */
const ogDefaults = { w: '1200', h: '630', fit: 'cover', format: 'jpg', quality: '80', flatten: 'true', background: '#ffffff' }

const withDefaults = (url: URL, flag: string, defaults: Record<string, string>) => {
  const params = new URLSearchParams(defaults)
  url.searchParams.forEach((value, key) => {
    if (key !== flag) params.set(key, value)
  })
  return params
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    reactRouter(),
    imagetools({
      defaultDirectives: async (url, metadata) => {
        if (url.searchParams.has('picture')) {
          const { width = pictureWidths[0], hasAlpha = false } = await metadata()
          return withDefaults(url, 'picture', pictureDefaults(width, hasAlpha))
        }
        if (url.searchParams.has('og')) return withDefaults(url, 'og', ogDefaults)
        return new URLSearchParams()
      },
    }),
  ],
})
