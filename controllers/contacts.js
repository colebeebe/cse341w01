const Contact = require('../db/contact');

const getAll = async (req, res) => {
    const contacts = await Contact.find();
    res.json(contacts);
};

const getById = async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    res.json(contact);
};

module.exports = {
    getAll,
    getById
};
