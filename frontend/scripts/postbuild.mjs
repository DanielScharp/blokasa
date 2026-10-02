// Ajustes no build estático depois do `react-router build`.
import { copyFile } from 'node:fs/promises'
import { join } from 'node:path'

const client = 'build/client'

// Toda página válida é pré-renderizada; o resto cai no 404.html, que os hosts estáticos servem com status 404.
// Ele é o shell da SPA: o roteador carrega e mostra a página "não encontrada".
await copyFile(join(client, '__spa-fallback.html'), join(client, '404.html'))

console.log('postbuild: 404.html gerado')
