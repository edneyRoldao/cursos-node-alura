/**
 * Criando um servidor de aplicacao
 */
let http = require('http');

let server = http.createServer((request, response) => {

    if (request.url == '/home') {
        response.end('<html><body><h1>HOME DO SISTEMA</h1></body></html>');
    }

    if (request.url == '/clientes') {
        response.end('<html><body><h2>Listando clientes...</h2></body></html>');        
    }

});

// definindo a porta
server.listen(3000);

// mensagem de feedback
console.log('o servidor está rodando na porta 3000');