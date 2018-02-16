const app = require('./config/express')();

const port = 3000;
const host = 'localhost';

app.listen(port, host, () => {
    console.log('Server already running');
});