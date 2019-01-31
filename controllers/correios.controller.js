module.exports = (app) => {
    app.get('/cep/:cep', (req, res) => {
        let cep = req.params.cep;
        let correiosService = new app.services.CorreiosService();

        correiosService.getCep(cep, (err, request, response, result) => {
            res.send(result);
        })
    });

    app.get('/correios/calculo-prazo', (req, res) => {
        let codigoServico = 40010;
        
        let dadosEntrega = {
            'nCdServico': codigoServico,
            'sCepOrigem': req.query.origem,
            'sCepDestino': req.query.destino
        }
    
        console.log(dadosEntrega);

        let correiosSOAPService = new app.services.PrazoEntregaService();

        correiosSOAPService.calculaPrazo(dadosEntrega, (error, result) => {
            if (error) {
                res.status(500).send(error);
                return;
            }

            console.log('prazo calculado');
            res.json(result);
        });

    });
}