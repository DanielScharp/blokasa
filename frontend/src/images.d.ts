// Imports de imagem processados pelo vite-imagetools (ver vite.config.ts)
declare module '*?picture' {
  const picture: import('./components/ui/Picture').PictureSource
  export default picture
}

declare module '*&picture' {
  const picture: import('./components/ui/Picture').PictureSource
  export default picture
}
