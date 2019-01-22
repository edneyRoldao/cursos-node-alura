let porta = 3000;
let app = require('./config/express')();


app.get('/produtos', (req, res) => {
    res.send('<html><body><h2> Listando produtos </h2></body></html>');
});

app.get('/home', (req, res) => {
    res.send('<html><body><h1>Bem Vindo !</h1></body></html>')
});

app.listen(porta, () => console.log('Servidor rodando na porta: ', porta));