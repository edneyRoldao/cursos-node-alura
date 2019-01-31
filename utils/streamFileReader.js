/**
 * Vai adicionar o arquivo em um buffer tbm, porem em partes (chunks)
 */
let fs = require('fs');

fs.createReadStream('imagem.jpeg')
  .pipe(fs.createWriteStream('imagem-stream.jpeg'))
  .on('finish', () => console.log('arquivo escrito com stream') );