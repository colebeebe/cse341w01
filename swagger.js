const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'CSE 341 API',
        description: 'API for CSE 341 contacts app',
    },
    host: 'cse341w01-3k2g.onrender.com',
    schemes: ['http']
};

const outputFile = './swagger.json';
const endpointFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointFiles, doc);
