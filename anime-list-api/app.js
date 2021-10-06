
require('dotenv').config();
var indexRouter = require('./routes/index');
var animeRouter = require('./routes/animes');
var genreRouter = require('./routes/genres');

//for building rest apis
const express = require("express");
const app = express();

//helps parse the request and create the req.body object
// not required anymore: const bodyParser = require("body-parser");

//provides express middleware to enable cors with various options
//cors: cross-origin resource sharing, meaning a protocol that enables scripts running on a browser client to interact with ressources from different origin
const cors = require("cors");
let corsOptions = { 
  origin: "http://localhost:8080",
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

//app.use(bodyParser.json()); deprectated. now use this: (body parsing has become builtin with express)
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(indexRouter, animeRouter, genreRouter);

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Anime-List API',
      description: 'API Description for Anime-List',
      contact: {
        name: 'Test Name'
      },
      servers: ["http://localhost:8081"]
    }
  },
  // ['.routes/*.js']
  apis: ["server.js"]
};

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

module.exports = app;
