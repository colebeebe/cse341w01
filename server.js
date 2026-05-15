const express = require('express');
const connectMongo = require('./models/connection');

connectMongo('cse341');
const app = express();

app.use(express.json());

app.use('/', require('./controllers/routes'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});
