let soap = require('soap');

let URL;

function CorreiosSOAPClient() {
    URL = 'http://ws.correios.com.br/calculador/CalcPrecoPrazo.asmx?wsdl';
}

CorreiosSOAPClient.prototype.calculaPrazo = (args, callback) => {
    soap.createClient(URL, (error, client) => {
        client.CalcPrazo(args, callback); 
    });
};

module.exports = () => CorreiosSOAPClient;