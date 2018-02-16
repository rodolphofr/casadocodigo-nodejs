const express = require('express'); // recebe o módulo express (guarda a funcao)
const load = require('express-load');

module.exports = () => {
    let app = express(); // invoca e recebe o objeto do express

    app.set('view engine', 'ejs'); // informa para o app a view engine utilizada
    app.set('views', './app/views'); // informa para o app aonde estao as views

    // carrega arquivos de rotas e de infra dentro do objeto app
    // no cwd é passado a localização do diretório onde consta os .js facilitar o trabalho do express
    load('routes', { cwd : 'app' })
        .then('infra')
        .into(app);
        
    return app;
}