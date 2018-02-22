const http = require('http');
const config = {
    hostname : 'localhost',
    port : 3000,
    path : '/products',
    headers : {
        Accept : 'application/json'
    }
};

http.get(config, (response) => {
    console.log(response.statusCode);
    response.on('data', (body) => {
        console.log('Body: ' + body);
    });
});