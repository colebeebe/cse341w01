const Contact = require('../db/contact');

const getAll = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    }
    catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};

const getById = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
    
        if (!contact) {
            return res.status(404).json({
                error: 'Contact not found'
            });
        }

        res.json(contact);
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
};

const createNew = async (req, res) => {
    try {
        const contact = await Contact.create(req.body);
        res.status(201).json(contact);
    }
    catch (err) {
        res.status(400).json({
            error: err.message
        });
    }
};

const updateExisting = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!contact) {
            return res.status(404).json({
                error: 'Contact not found'
            });
        }

        res.status(200).json(contact);
    }
    catch (err) {
        res.status(400).json({
            error: err.message
        });
    }
};

const deleteById = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);

        if (!contact) {
            return res.status(404).json({
                error: 'Contact not found'
            });
        }

        res.sendStatus(204);
    }
    catch (err) {
        res.status(400).json({
            error: err.message
        });
    }
};

module.exports = {
    getAll,
    getById,
    createNew,
    updateExisting,
    deleteById,
};
