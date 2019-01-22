let mysql = require('mysql');

module.exports = () => {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Rem@69378',
        database: 'app_alura' 
     });
};