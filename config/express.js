const express = require('express'); // recebe o módulo express (guarda a funcao)
const load = require('express-load');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const expressValidator = require('express-validator');

module.exports = () => {
    const app = express(); // invoca e recebe o objeto do express

    app.set('view engine', 'ejs'); // informa para o app a view engine utilizada
    app.set('views', './app/views'); // informa para o app aonde estao as views

    /* MIDDLEWARES */
    // request middleware
    // informando que o express agora é o responsável por fazer parse de urlencoded
    app.use(bodyParser.urlencoded({ extended : true }))
    // outro middleware para informar ao express que também pode receber conteúdo em formato json
    app.use(bodyParser.json());
    app.use(expressValidator());

    // É importante que essa chamada fique depois do uso do bodyParser,
    // pois somente após os parâmetros da requisição serem devidamente
    // incluídos nos devidos objetos é que o method_override poderá realizar
    // “sua mágica”.
    app.use(methodOverride('_method'));

    // carrega arquivos de rotas e de infra dentro do objeto app
    // no cwd é passado a localização do diretório onde consta os .js, facilitar o trabalho do express
    load('routes', { cwd : 'app' })
        .then('infra')
        .then('validators')
        .into(app);

    return app;
}