function ProductsDAO(connection) {
    this._connection = connection;
}

// prototype adiciona propriedades a estrutura padrao de uma classe
ProductsDAO.prototype.list = function(callback) {
    this._connection.query('SELECT * FROM produtos', callback);
}

ProductsDAO.prototype.save = function(product, callback) {
    // o driver do mysql do js transforma o json recebido nos valores recebidos
    // a cada devida coluna da tabela
    this._connection.query('INSERT INTO produtos SET ?', product, callback);
}

ProductsDAO.prototype.find = function(productId, callback) {
    this._connection.query('SELECT * FROM produtos WHERE id = ?', productId, callback);
}

ProductsDAO.prototype.delete = function(productId, callback) {
    this._connection.query('DELETE FROM produtos WHERE id = ?', productId, callback);
}

module.exports = () => {
    return ProductsDAO;
}
