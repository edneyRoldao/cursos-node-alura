module.exports = (app) => {
    
    app.get('/produtos', (req, res) => {
        let conn = app.repositories.connectionFactory();
        let prodRepository = new app.repositories.ProdutoRepository(conn);

        prodRepository.listarProdutos((error, result) => {
            res.send(result);
        });

        conn.end();
    });

    app.post('/novo/produto', function(req, res) {
        let produto = req.body;

        // so vai exibir se o body-parser estiver configurado
        console.log(produto);

        res.send('request recebido');
    });

    // comando para testar o endpoint acima via terminal
    // curl http://localhost:3000/novo/produto -X POST -v -H "Content-type: application/json" -d '{"nome": "teste", "valor": 15}' ; echo    
};

