const mysql = require('mysql');

function createDBConnection() {
    const config = {
        host : process.env.MYSQL_HOST || 'localhost',
        user : process.env.MYSQL_USER || 'root',
        password : process.env.MYSQL_PASS || '',
        database : 'casadocodigo_nodejs'
    };

    if (process.env.NODE_ENV == 'test') config.database += '_test';

    return mysql.createConnection(config);
}

module.exports = () => {
    return createDBConnection;
}