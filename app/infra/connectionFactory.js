const mysql = require('mysql');

function createDBConnection() {
    const env = process.env;
    const config = {
        host : env.MYSQL_HOST || 'localhost',
        user : env.MYSQL_USER || 'root',
        password : env.MYSQL_PASS || 'root',
        database : 'casadocodigo_nodejs'
    };

    if (env.NODE_ENV == 'prod') config.database += '_prod';

    return mysql.createConnection(config);
}

module.exports = () => {
    return createDBConnection;
}