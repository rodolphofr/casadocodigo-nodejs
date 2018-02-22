
module.exports = (app) => {
    app.get('/products', (req, res) => {
        let connection = app.infra.connectionFactory();
        let productsDAO = new app.infra.ProductsDAO(connection);

        productsDAO.list((err, result) => {
            res.render('products/list', { books : result });
        });

        connection.end();
    });


    app.get('/products/form', (req, res) => { 
        res.render('products/form'); 
    });
}
