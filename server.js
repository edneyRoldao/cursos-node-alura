/**
 * Criando um servidor de aplicacao
 */
 let http = require('http');

 let server = http.createServer((request, response) => {
    response.end('<html><body><h1>Hello World</h1></body></html>');
 });

 // definindo a porta
 server.listen(3000);

 // mensagem de feedback
 console.log('o servidor está rodando na porta 3000');