let porta = 3010;
let app = require('./config/express')();

app.listen(porta, () => console.log('Servidor rodando na porta: ', porta));
