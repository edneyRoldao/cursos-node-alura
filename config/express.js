let express = require('express');
let consign = require('consign');
let bodyParser = require('body-parser');

 module.exports = () => {
    console.log('Carregando modulo do express');

    let app = express();

    // configurando o body-parser
    app.use( bodyParser.urlencoded({extended: true}) );
    app.use( bodyParser.json() );

    // Esse cara substitui o express-load
    consign()
        .include('controllers')
        .then('repositories')
        .into(app);

    return app;
 };