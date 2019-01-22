/**
 * Arquivo de configuracao do servidor EXPRESS
 * 
 */

// Obs: a funcao que carraga o objeto com os dados do express, ja esta sendo invocada.
 let app = require('express')();

 // deixando o express acessivel externamente
 module.exports = () => {
    console.log('Carregando modulo do express');
    return app;
 };