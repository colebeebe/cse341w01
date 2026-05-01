/**
 * Imports/Dependencies
 */
const express = require('express');
const connectMongo = require('./db/connection');

connectMongo('cse341');

/**
 * Set up Express application
 */
const app = express();

/**
 * Middleware
 */
app.use(express.json());

/**
 * Define routes
 */
app.use('/', require('./routes'));

/**
 * Start web server
 */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});
