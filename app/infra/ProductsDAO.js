function ProductsDAO(connection) {
    this._connection = connection;
}

// prototype adiciona propriedades a estrutura padrao de uma classe
ProductsDAO.prototype.list = function(callback) {
    this._connection.query('SELECT * FROM produtos', callback);
}

module.exports = () => {
    return ProductsDAO;
}
