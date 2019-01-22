let porta = 3000;
let app = require('./config/express')();

// a pasta views nao precisa ser referenciada pois o ejs vai procurar as nossos paginas a partir dela
app.get('/produtos', (req, res) => {
    res.render('produtos/lista_produtos');
});

app.get('/home', (req, res) => {
    res.send('<html><body><h1>Bem Vindo !</h1></body></html>');
});

app.listen(porta, () => console.log('Servidor rodando na porta: ', porta));