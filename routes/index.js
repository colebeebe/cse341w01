const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('<a href="/api-docs">View Docs</a>');
});

router.use('/api-docs', require('./swagger'));
router.use('/contacts', require('./contacts'));


module.exports = router;
