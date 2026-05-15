const router = require('express').Router();
const {
    getAllContacts,
    getContactById,
    createNewContact,
    updateExistingContact,
    deleteContactById
} = require('../controllers/contacts');

router.get('/', getAllContacts);
router.get('/:id', getContactById);

router.post('/', createNewContact);

router.put('/:id', updateExistingContact);

router.delete('/:id', deleteContactById);

module.exports = router;
