// nao precisamos mais usar o require para importar os modulos, pois 
// eles estao sendo carregados dentro do express.js por meio do express-load

module.exports = (app) => {
    app.get('/produtos', (req, res) => {
        let conn = app.infra.connectionFactory();

        conn.query('SELECT * FROM livro', (err, result) => {
            res.render('produtos/lista_produtos', {lista: result});
        });

        conn.end();
    });    
};

