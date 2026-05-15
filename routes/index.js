const router = require('express').Router();
const { namePageCole, namePageChloe } = require('../controllers/lesson1');

router.get('/', namePageCole);
router.get('/chloe', namePageChloe);

router.use('/contacts', require('./contacts'));

router.use('/api-docs', require('./swagger'));

module.exports = router;
