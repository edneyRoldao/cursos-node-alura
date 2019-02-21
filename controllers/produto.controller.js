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

        let t = 'asdasdfas';

        prodRepository.listarProdutosTest().then(r => {

            prodRepository.read(r[0].id, (e, r) => {
                // console.log(r);
                // console.log(t);
                
            })

        });
        
    });

    app.post('/novo/produto', function(req, res) {
        
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
        let id = req.params.id;
        let prodRepository = _getProdutoRepository(app);

        prodRepository.read(id, (error, result) => {
            let finalProd = Object.assign({}, result[0], produto);
            prodRepository.update(finalProd, (error) => {
            });    
        });
    });

};

function _getProdutoRepository(app) {
    let conn = app.repositories.connectionFactory();
    return new app.repositories.ProdutoRepository(conn);
}
