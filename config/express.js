// Arquivo de configuracao do servidor EXPRESS

// Obs: a funcao que carraga o objeto com os dados do express, ja esta sendo invocada.
 let app = require('express')();

// adicionando configuracoes da engine que vai renderizar as nossas paginas HTML
// por padrao as nossas paginas devem ser criadas a partir da pasta 
// views que deve ser criada na raiz do projeto
app.set('view engine', 'ejs');

 // deixando o express acessivel externamente
 module.exports = () => {
    console.log('Carregando modulo do express');
    return app;
 };