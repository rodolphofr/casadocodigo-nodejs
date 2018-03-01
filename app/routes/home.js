module.exports = (app) => {
    app.get('/', (request, response, next) => {
        const connection = app.infra.connectionFactory();
        const prodDAO = new app.infra.ProductsDAO(connection);

        prodDAO.all((error, result) => {
            if (error) return next(error);
            response.render('home/index', { books : result });
        });

        connection.end();
    }); 
}