const contactController = require('../controllers/contacts');
const router = require('express').Router();

// GET
router.get('/', contactController.getAll);
router.get('/:id', contactController.getById);

// POST
router.post('/', contactController.createNew);

// PUT
router.put('/:id', contactController.updateExisting);

// DELETE
router.delete('/:id', contactController.deleteById);

module.exports = router;
