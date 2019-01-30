module.exports = (app) => {
    
    app.get('/produtos/:id', (req, res) => {
        let id = req.params.id;
        let prodRepository = _getProdutoRepository(app);

        prodRepository.read(id, (error, result) => {

            if (error) {
                res.status(400).send(error);
                return;
            }

            res.send(result);
        });
    });

    app.get('/produtos', (req, res) => {
        let prodRepository = _getProdutoRepository(app);

        prodRepository.listarProdutos((error, result) => {

            if (error) {
                res.status(500).send(error);
                return;
            }

            res.send(result);
        });

        conn.end();
    });

    app.post('/novo/produto', function(req, res) {

        // vamos validar a consistencia dos campos
        // no console do mySql faca o comando: desc livro;
        req.assert('titulo', 'titulo is required')
           .notEmpty();

        req.assert('descricao', 'descricao is required')
           .notEmpty();

        req.assert('preco', 'preco must be a decimal value')
           .isFloat();
        
        let errors = req.validationErrors();

        if (errors) {
            console.log('Erros de validacao encontrados');
            res.status(400).send(errors);
            return;
        }

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

    app.put('/alterar/produto/:id', (req, res) => {
        let produto = req.body;
        produto.id = req.params.id;

        let prodRepository = _getProdutoRepository(app);

        prodRepository.update(produto, (error) => {
            if (error) {
                res.status(500).send(error);
                return;
            }

            console.log('produto alterado com sucesso');
        });

    });

};

function _getProdutoRepository(app) {
    let conn = app.repositories.connectionFactory();
    return new app.repositories.ProdutoRepository(conn);
}
