let restifyClient = require('restify-clients');

let client;

function CorreiosClient() {
    client = restifyClient.createJsonClient({
        url: 'https://viacep.com.br'
    });
}

CorreiosClient.prototype.getCep = (cep, callback) => {
    let path = '/ws/' + cep + '/json';
    client.get(path, callback);
}

module.exports = () => CorreiosClient;
