const mongoose = require('mongoose');

const URI = process.env.URI;

const connectMongo = async (database) => {
    try {
        if (!URI) return console.log('No URI detected... No database connection...');

        await mongoose.connect(URI + database);
        console.log('Connected to database...');
    } catch (err) {
        console.log('Database not connected:', err);
    }
};

module.exports = connectMongo;
