module.exports = (app) => {
    app.get('/offers/form', (request, response, next) => {
        const connection = app.infra.connectionFactory();
        const prodDAO = new app.infra.ProductsDAO(connection);

        prodDAO.all((error, result) => {
            if (error) return next(error);
            response.render('offers/form', { books : result });
        });

        connection.end();
    });

    app.post('/offers', (request, response, next) => {
        const offer = request.body;
        console.log(offer);
        app.get('io').emit('new offer', offer);
        response.render('offers/form');
    });
}