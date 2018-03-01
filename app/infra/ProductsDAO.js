function ProductsDAO(connection) {
    this._connection = connection;
} 

// prototype adiciona propriedades a estrutura padrao de uma classe
ProductsDAO.prototype.all = function(callback) {
    this._connection.query('SELECT * FROM products', callback);
}

ProductsDAO.prototype.save = function(product, callback) {
    // o driver do mysql do js transforma o json recebido nos valores recebidos
    // a cada devida coluna da tabela
    this._connection.query('INSERT INTO products SET ?', product, callback);
}

ProductsDAO.prototype.find = function(productId, callback) {
    this._connection.query('SELECT * FROM products WHERE id = ?', productId, callback);
}

ProductsDAO.prototype.delete = function(productId, callback) {
    this._connection.query('DELETE FROM products WHERE id = ?', productId, callback);
}

ProductsDAO.prototype.deleteAll = function(callback) {
    this._connection.query('DELETE FROM products', callback);
}

module.exports = () => {
    return ProductsDAO;
}
