const router = require('express').Router();
const { namePageCole, namePageChloe } = require('./lesson1');
const {
    getAllContacts,
    getContactById,
    createNewContact,
    updateExistingContact,
    deleteContactById
} = require('./contacts');

router.get('/', namePageCole);
router.get('/chloe', namePageChloe);

router.get('/contacts/', getAllContacts);
router.get('/contacts/:id', getContactById);

router.post('/contacts/', createNewContact);

router.put('/contacts/:id', updateExistingContact);

router.delete('/contacts/:id', deleteContactById);

module.exports = router;
