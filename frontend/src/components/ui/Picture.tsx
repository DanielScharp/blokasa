import type { ImgHTMLAttributes } from 'react'

/** Objeto gerado por `import foto from './foto.jpg?picture'` (vite-imagetools). */
export interface PictureSource {
  /** formato → srcset */
  sources: Record<string, string>
  img: { src: string; w: number; h: number }
}

interface Props extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet' | 'width' | 'height'> {
  picture: PictureSource
  alt: string
  /** Largura em que a imagem aparece, ex.: "(max-width: 767px) 100vw, 400px" */
  sizes: string
}

const mime = (format: string) => `image/${format === 'jpg' ? 'jpeg' : format}`

/**
 * Imagem responsiva: AVIF/WebP com várias larguras e fallback em JPEG/PNG.
 * As fontes vêm na ordem da diretiva `format` (o navegador usa a primeira que suportar).
 * `width`/`height` reais evitam deslocamento de layout enquanto a imagem carrega.
 */
export function Picture({ picture, sizes, loading = 'lazy', decoding = 'async', ...img }: Props) {
  return (
    <picture>
      {Object.entries(picture.sources).map(([format, srcSet]) => (
        <source key={format} type={mime(format)} srcSet={srcSet} sizes={sizes} />
      ))}
      <img
        src={picture.img.src}
        width={picture.img.w}
        height={picture.img.h}
        loading={loading}
        decoding={decoding}
        {...img}
      />
    </picture>
  )
}
