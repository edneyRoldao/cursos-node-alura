/**
 * Utilizando buffer, todo arquivo e colocado nesse buffer e depois escrito
 */

let fs = require('fs');

fs.readFile('imagem.jpeg', (err, buffer) => {
    console.log('arquivo lido');

    fs.writeFile('imagem2.jpeg', buffer, (err) => {
        console.log('arquivo escrito');        
    });
    
});