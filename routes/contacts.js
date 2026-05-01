const express = require('express');
const Contact = require('../db/contact');
const connectMongo = require('../db/connection');
const router = express.Router();

router.get('/', async (req, res) => {
    const contacts = await Contact.find();
    res.json(contacts);
});

router.get('/:id', async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    res.json(contact);
});

module.exports = router;
