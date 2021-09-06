module.exports = (app) => {
    app.get('/test-post', (req, res) => {
        let testPost = new app.services.TestPostIntegration();

        const prod = {
            name: 'product name',
            description: 'tesing post integration using restfy-clients'
        }

        testPost.postObject(prod, (err, request, response, result) => {
            res.status(201).json(result); 
        })
    });
}
