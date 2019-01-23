let mysql = require('mysql');

function getConnection () {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Rem@69378',
        database: 'app_alura' 
     });
};

// wrapper
module.exports = () => {
    return getConnection;
};