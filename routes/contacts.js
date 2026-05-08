const { getAll, getById } = require('../controllers/contacts');
const router = require('express').Router();

router.get('/', getAll);

router.get('/:id', getById);

module.exports = router;
