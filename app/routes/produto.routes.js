let getConnection = require('../infra/connectionFactory');

// podemos passar as configuracoes de um modulo para dentro de outro 
// passado o mesmo como argumento. Nesse caso teremos o express como argumento.
module.exports = (app) => {
    app.get('/produtos', (req, res) => {
        let conn = getConnection();

        conn.query('SELECT * FROM livro', (err, result) => {
            res.render('produtos/lista_produtos', {lista: result});
        });

        conn.end();
    });    
};

