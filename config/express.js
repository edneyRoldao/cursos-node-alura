let express = require('express');
let consign = require('consign');
let bodyParser = require('body-parser');
let expressValidator = require('express-validator');

 module.exports = () => {
    console.log('Carregando modulo do express');

    let app = express();

    // Ensinando o express a validar os dados de entrada
    app.use( expressValidator() );

    app.use( bodyParser.urlencoded({extended: true}) );
    app.use( bodyParser.json() );

    consign()
        .include('controllers')
        .then('repositories')
        .then('services')
        .into(app);

    return app;
 };