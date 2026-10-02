import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { imagetools } from 'vite-imagetools'

/**
 * `import foto from './foto.jpg?picture'` gera AVIF/WebP/JPEG em 3 larguras e devolve o objeto
 * que o componente <Picture> espera. Parâmetros na URL (ex.: `?w=640;1280&picture`) substituem os padrões.
 */
const pictureDefaults = { as: 'picture', format: 'avif;webp;jpg', w: '480;960;1600' }

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    imagetools({
      defaultDirectives: (url) => {
        if (!url.searchParams.has('picture')) return new URLSearchParams()
        const params = new URLSearchParams(pictureDefaults)
        url.searchParams.forEach((value, key) => {
          if (key !== 'picture') params.set(key, value)
        })
        return params
      },
    }),
  ],
})
