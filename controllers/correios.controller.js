module.exports = (app) => {
    app.get('/cep/:cep', (req, res) => {
        let cep = req.params.cep;
        let correiosService = new app.services.CorreiosService();

        correiosService.getCep(cep, (err, request, response, result) => {
            res.send(result);
        })
    });

    app.get('/correios/calculo-prazo', (req, res) => {
        let dadosEntrega = {
            'nCdServico': '40010',
            'sCepOrigem': '02343030',
            'sCepDestino': '04101300'
        }
    
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