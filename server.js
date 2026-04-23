const express = require('express');
const app = express();
const lesson1Controller = require('./controllers/lesson1');

app.get('/', lesson1Controller.route);
app.get('/chloe', lesson1Controller.route2);

const port = 3000;

app.listen(process.env.port || port);
console.log('Web server is listening at port ' + (process.env.port || port));
