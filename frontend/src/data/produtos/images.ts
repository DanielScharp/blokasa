import type { PictureSource } from '../../components/ui/Picture'

// As galerias e os cards referenciam fotos pelo nome do arquivo em src/assets/produtos; aqui elas viram
// imagens responsivas (?picture) e prévias de link (?og). Fica separado de index.ts para o config do build
// não precisar processar imagens. Só essa pasta entra, para o build não gerar variantes de fotos sem uso.
const pictures = import.meta.glob<PictureSource>('../../assets/produtos/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
  query: '?picture',
})

const ogImages = import.meta.glob<string>('../../assets/produtos/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
  query: '?og',
})

function find<T>(images: Record<string, T>, file: string) {
  const image = images[`../../assets/produtos/${file}`]
  if (!image) throw new Error(`Imagem não encontrada: src/assets/produtos/${file}`)
  return image
}

export const productPicture = (file: string) => find(pictures, file)

export const productOgImage = (file: string) => find(ogImages, file)
