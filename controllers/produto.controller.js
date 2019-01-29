module.exports = (app) => {
    
    app.get('/produtos', (req, res) => {
        let prodRepository = _getProdutoRepository(app);

        prodRepository.listarProdutos((error, result) => {
            res.send(result);
        });

        conn.end();
    });

    app.post('/novo/produto', function(req, res) {
        let produto = req.body;
        let prodRepository = _getProdutoRepository(app);

        prodRepository.create(produto, (error, result) => {
            if (error) {
                console.log('ocorreu um erro ao inserir os dados no banco');                
                res.status(400).send(error);

            } else {
                res.status(201).send('produto inserido com sucesso');
            }

        });
    });

};

function _getProdutoRepository(app) {
    let conn = app.repositories.connectionFactory();
    return new app.repositories.ProdutoRepository(conn);
}















//   