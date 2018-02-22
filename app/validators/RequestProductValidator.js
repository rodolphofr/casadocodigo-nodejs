function RequestProductValidator() {

}

RequestProductValidator.prototype.validate = function(request) {
    request.assert('title', 'title cannot be empty').notEmpty();
    request.assert('description', 'description cannot be empty').notEmpty();
    request.assert('price', 'price cannot be empty').notEmpty();
    request.assert('price', 'invalid format').isFloat();
}

module.exports = () => { 
    return RequestProductValidator;
}