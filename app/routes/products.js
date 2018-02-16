
module.exports = (app) => {
    app.get('/products', (req, res) => {
        let connection = app.infra.connectionFactory();
        let products = new app.infra.ProductsDAO(connection);

        products.list((error, result) => {
            res.render('products/list', { books : result });
        });

        connection.end();
    });
}
