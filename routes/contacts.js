const express = require('express');
const Contact = require('../db/contact');
const connectMongo = require('../db/connection');
const router = express.Router();

router.get('/', async (req, res) => {
    connectMongo('cse341');
    const contacts = await Contact.find();
    res.json(contacts);
});

router.get('/:id', async (req, res) => {
    connectMongo('cse341');
    const contact = await Contact.findById(req.params.id);
    res.json(contact);
});

module.exports = router;
