
module.exports = (app) => {
    app.get('/products', (request, response) => {
        let connection = app.infra.connectionFactory();
        let prodDAO = new app.infra.ProductsDAO(connection);

        prodDAO.list((err, result) => {
            response.format({
                html : () => { response.render('products/list', { books : result }); },
                json : () => { response.json(result); }
            });
        });

        connection.end();
    });

    app.post('/products', (request, response) => {
        let product = request.body
        let connection = app.infra.connectionFactory();
        let prodDAO = new app.infra.ProductsDAO(connection);

        prodDAO.save(product, (err, result) => {
            response.redirect('/products');
        });

        connection.end();
    });

    app.delete('/products', (request, response) => {
        let connection = app.infra.connectionFactory();
        let prodDAO = new app.infra.ProductsDAO(connection);

        let productId = request.body.id;

        prodDAO.delete(productId, (err, result) => {
            response.redirect('/products');
        });

        connection.end();
    });

    app.get('/products/form', (request, response) => {
        response.render('products/form');
    });
}
