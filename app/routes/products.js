
module.exports = (app) => {
    const PRODUCT_URI = '/products';
    const PATH_PRODUCT_FORM = 'products/form';

    function jsonForm(errors = {}, prod = {}) {
        return { validationErrors : errors , product : prod };
    }

    app.get(PRODUCT_URI, (request, response, next) => {
        const connection = app.infra.connectionFactory();
        const prodDAO = new app.infra.ProductsDAO(connection);

        prodDAO.all((error, result) => {
            if (error) return next(error);

            response.format({
                html : () => { response.render('products/list', { books : result }); },
                json : () => { response.json(result); }
            });
        });

        connection.end();
    });

    app.post(PRODUCT_URI, (request, response, next) => {
        new app.validators.RequestProductValidator().validate(request);

        const errors = request.validationErrors();

        if (errors) {
            const json = jsonForm();
            json.validationErrors = errors;
            json.product = request.body;

            response.status(400);
            response.format({
                html : () => { response.render(PATH_PRODUCT_FORM, json); },
                json : () => { response.json(errors); }
            });

            return;
        }

        const connection = app.infra.connectionFactory();
        const prodDAO = new app.infra.ProductsDAO(connection);

        prodDAO.save(request.body, (error, result) => {
            if (error) return next(error);
            response.redirect(PRODUCT_URI);
        });

        connection.end();
    });

    app.delete(PRODUCT_URI, (request, response, next) => {
        const connection = app.infra.connectionFactory();
        const prodDAO = new app.infra.ProductsDAO(connection);
        const productId = request.body.id;

        prodDAO.delete(productId, (error, result) => {
            if (error) return next(error);
            response.redirect(PRODUCT_URI);
        });

        connection.end();
    });

    app.get(`${PRODUCT_URI}/form`, (request, response) => {
        response.render(PATH_PRODUCT_FORM, jsonForm());
    });
}
