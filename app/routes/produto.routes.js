// podemos passar as configuracoes de um modulo para dentro de outro 
// passado o mesmo como argumento. Nesse caso teremos o express como argumento.
module.exports = (app) => {
    app.get('/produtos', (req, res) => {

        // conectando com o banco
        let mysql = require('mysql');

        let conn = mysql.createConnection({
           host: 'localhost',
           user: 'root',
           password: 'Rem@69378',
           database: 'app_alura' 
        });

        // realizando a query
        conn.query('SELECT * FROM livro', (err, result) => {
            // res.send(result); podemos exibir o json diretamente sem o uso da pagina html

            // a propriedade lista será disponibilizada na pagina lista_produtos
            res.render('produtos/lista_produtos', {lista: result});
        });

        conn.end();

    });    
};

