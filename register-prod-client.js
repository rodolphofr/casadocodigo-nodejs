const http = require('http');
const config = {
    hostname : 'localhost',
    port : 3000,
    path : '/products',
    method : 'post',
    headers : {
        Accept : 'application/json',
        'Content-type' : 'application/json'
    }
};

const client = http.request(config, (response) => {
    console.log(response.statusCode);  
    response.on('data', (body) => {
        console.log('body: ' + body);
    });
});

const product = {
    title : 'avançando na plataforma JS',
    description : 'Avançando sem parar em JS',
    price : 100
};

client.end(JSON.stringify(product)); // dispara a requisição