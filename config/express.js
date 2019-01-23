/**
 * Adicionando o express-load ao projeto.
 * 
 * O express-load e utilizado para carregar nossos modulos sem a necessidade de utilizar o require
 * demasiadamente
 * 
 */

let express = require('express');
let load = require('express-load');

 module.exports = () => {
    console.log('Carregando modulo do express');

    let app = express();

    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    // vamos apontar os estao a nossas rotas para serem carregadas de forma facilitada se o uso do require
    // utilizamos a prop cwd para ensinar o load-express a partir de onde ele ira procurar a pasta routes e infra
    // Agora, a variavel app possui todos os modulos prensentes na pasta routes e infra.
    // A ordem das pastas aqui sao importantes (como routes depende de infra, entao routes deve ser carregado primeiro)
    // Obs: o express-load invoca a funcao do module.export dos modulos, entao coisa como a criacao de conexao com o banco
    //      devem ser empacotadas em uma funcao interna para que nao se crie uma connection o modulo é carregado.
    load('routes', {cwd: 'app'})
        .then('infra')
        .into(app);

    return app;
 };