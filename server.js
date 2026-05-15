const express = require('express');
const connectMongo = require('./models/connection');

connectMongo('cse341');
const app = express();

app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
    );
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use('/', require('./routes'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});
