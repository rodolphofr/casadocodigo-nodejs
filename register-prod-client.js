const http = require('http');
const config = {
    hostname : 'localhost',
    port : 3000,
    path : '/products',
    method : 'post',
    headers : {
        Accept : 'application/json', // aceita o conteudo recebido
        'Content-type' : 'application/json' // conteúdo enviado 
    }
};

const client = http.request(config, (response) => {
    console.log(response.statusCode);  
    response.on('data', (body) => {
        console.log('body: ' + body);
    });
});

const product = {
    title : '',
    description : 'Avançando sem parar em JS',
    price : 100
};

client.end(JSON.stringify(product)); // dispara a requisição