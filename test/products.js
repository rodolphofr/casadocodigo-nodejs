const app = require('../config/express')();
const request = require('supertest')(app);
const RESOURCE = '/products'

describe('#ProductsController', () => {

	beforeEach((done) => {
		const connection = app.infra.connectionFactory();
		const prodDAO = new app.infra.ProductsDAO(connection);

		prodDAO.deleteAll((error) => {
			if (!error) {
				done();
			}
		});

		connection.end();
	});

  	it('#should list products as json', (done) => { // done = finalization function
		request.get(RESOURCE)
				.set('Accept', 'application/json')
				.expect(200)
				.expect('Content-type', /json/, done);
	 });


	 it('#should not register invalid product', (done) => {
		const invalidProduct = { title : '',
								 description : 'desc',
								 price : 0.0
							   };

		request.post(RESOURCE)
			   .send(invalidProduct)
			   .expect(400, done);
	 });

	 it('#should save a valid product', (done) => {
		const validProduct = { title : 'book test',
								description : 'desc test',
								price : 10.0
							 };
		request.post(RESOURCE)
			   .send(validProduct)
			   .expect(302, done);
	 });

});