let fs = require('fs');

module.exports = (app) => {

    app.post('/upload/imagem', (req, res) => {
        console.log('recebendo imagem...');
        
        let fileName = req.headers.filename;
        
        req
          .pipe(fs.createWriteStream('files/' + fileName))
          .on('finish', () => console.log('arquivo escrito'));
            
        res.status(201).send('file uploaded sucessfully');
    });

}