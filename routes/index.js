const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.route);
routes.get('/chloe', lesson1Controller.route2);

module.exports = routes;
