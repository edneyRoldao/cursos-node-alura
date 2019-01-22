// Arquivo de configuracao do servidor EXPRESS

// Obs: a funcao que carraga o objeto com os dados do express, ja esta sendo invocada.
 let app = require('express')();

// adicionando configuracoes da engine que vai renderizar as nossas paginas HTML
// por padrao as nossas paginas devem ser criadas a partir da pasta 
// views que deve ser criada na raiz do projeto
app.set('view engine', 'ejs');

// Como nos movemos a pasta views para dentro da pasta app,
// precisamos ensinar o express como ele vai entrar tal pasta.
// obs: quando colocar ./ no inicio dos caminhos, estamos dizendo para a busca
// ser iniciado a partir da raiz do projeto, que sempre definido pelo local onde o
// arquivo package.json esta.
app.set('views', './app/views');

 // deixando o express acessivel externamente
 module.exports = () => {
    console.log('Carregando modulo do express');
    return app;
 };