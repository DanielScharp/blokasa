import type { PictureSource } from '../../components/ui/Picture'

// As galerias referenciam fotos por caminho (ex.: "produtos/piso-x.png"); aqui elas viram imagens
// responsivas (?picture) e prévias de link (?og). Fica separado de index.ts para o config do build
// não precisar processar imagens.
const pictures = import.meta.glob<PictureSource>('../../assets/**/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
  query: '?picture',
})

const ogImages = import.meta.glob<string>('../../assets/**/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
  query: '?og',
})

const key = (file: string) => `../../assets/${file}`

function find<T>(images: Record<string, T>, file: string) {
  const image = images[key(file)]
  if (!image) throw new Error(`Imagem não encontrada: src/assets/${file}`)
  return image
}

export const productPicture = (file: string) => find(pictures, file)

export const productOgImage = (file: string) => find(ogImages, file)
