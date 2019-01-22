// criando um servidor com o modulo do express
let express = require('express');
let app = express();
let porta = 3000;

// criando as rotas (urls) com express
app.get('/produtos', (req, res) => res.render('produtos/lista') );
app.get('/home', (req, res) => res.send('<html><body><h1>Bem Vindo !</h1></body></html>'));

// iniciando o servidor de aplicacao por meio do express
app.listen(porta, () => console.log('Servidor rodando na porta: ', porta));
