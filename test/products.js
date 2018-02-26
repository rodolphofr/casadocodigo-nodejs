const express = require('../config/express')();
const request = require('supertest')(express);
const RESOURCE = '/products'

describe('#ProductsController', () => {

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


});