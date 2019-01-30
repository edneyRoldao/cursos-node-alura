module.exports = (app) => {
    app.get('/cep/:cep', (req, res) => {
        let cep = req.params.cep;
        let correiosService = new app.services.CorreiosService();

        correiosService.getCep(cep, (err, request, response, result) => {
            res.send(result);
        })
    });
}