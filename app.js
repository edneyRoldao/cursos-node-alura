let porta = 3000;
let app = require('./config/express')();

// vamos passar o express como parametro para o modulo de rotas
// Nao precisamos mais carregar as rotas aqui pois estamos utilizando express-load
// let prodRoutes = require('./app/routes/produto.routes') (app);

app.listen(porta, () => console.log('Servidor rodando na porta: ', porta));