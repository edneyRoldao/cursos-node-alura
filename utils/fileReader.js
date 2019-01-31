let fs = require('fs');

fs.readFile('imagem.jpeg', (err, buffer) => {
    console.log('arquivo lido');

    fs.writeFile('imagem2.jpeg', buffer, (err) => {
        console.log('arquivo escrito');        
    });
    
});