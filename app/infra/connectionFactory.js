const mysql = require('mysql');

function createDBConnection() {
    const connection = mysql.createConnection({
        host : process.env.MYSQL_HOST || 'localhost',
        user : process.env.MYSQL_USER || 'root',
        password : process.env.MYSQL_PASS || 'root',
        database : 'casadocodigo_nodejs'
    });

    return connection;
}

module.exports = () => {
    return createDBConnection;
}