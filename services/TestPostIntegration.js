let restifyClient = require('restify-clients');

let client;

function PostTestClient() {
    client = restifyClient.createJsonClient({
        url: 'http://localhost:3000',
        headers: {
            "my-own-header": "gsdfgsdfg"
        }
    });
}

PostTestClient.prototype.postObject = (body, callback) => {
    let path = '/api/test-post-restfy/';

    client.post(path, body, callback);
}

module.exports = () => {
    return PostTestClient;
};
