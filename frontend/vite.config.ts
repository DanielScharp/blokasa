import { reactRouter } from '@react-router/dev/vite'
import { defineConfig } from 'vite'
import { imagetools } from 'vite-imagetools'

/**
 * `import foto from './foto.jpg?picture'` gera AVIF/WebP/JPEG em 3 larguras e devolve o objeto
 * que o componente <Picture> espera. Parâmetros na URL (ex.: `?w=640;1280&picture`) substituem os padrões.
 */
const pictureDefaults = { as: 'picture', format: 'avif;webp;jpg', w: '480;960;1600' }

/** `import capa from './foto.jpg?og'` gera a imagem de prévia de link (1200x630) e devolve a URL. */
const ogDefaults = { w: '1200', h: '630', fit: 'cover', format: 'jpg', quality: '80' }

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
      defaultDirectives: (url) => {
        if (url.searchParams.has('picture')) return withDefaults(url, 'picture', pictureDefaults)
        if (url.searchParams.has('og')) return withDefaults(url, 'og', ogDefaults)
        return new URLSearchParams()
      },
    }),
  ],
})
