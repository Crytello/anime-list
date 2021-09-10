require('dotenv').config();

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

const db = require("./app/models");
db.sequelize.sync();

//app.use(bodyParser.json()); deprectated. now use this: (body parsing has become builtin with express)
app.use(express.json());
app.use(express.urlencoded({extended: true}));

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



//simple route
app.get("/", (req, res) => {
    res.json({ 
      message: "Welcome to anime-list backend. Seeing this message means it is working!" 
    });
});

//animes
/**
 * @swagger
 * /animes:
 *  get:
 *    summary: Use to request all animes
 *    responses:
 *      200:
 *        description: collection of all stored animes
 */
app.get("/animes", (req, res) => {
  anime.findAll().then((anime) => {
    res.json(anime);
  })
}); 

const Anime = db.anime;

app.post("/animes", (req, res) => {
  const newAnime = new Anime({
    title_jp: req.body.title_jp,
    title_eng: req.body.title_eng, 
    status: req.body.status, 
    end_date: req.body.end_date, 
    studio: req.body.studio, 
    source: req.body.source, 
    current_episode_downloaded: req.body.current_episode_downloaded, 
    current_episode_watched: req.body.current_episode_watched, 
    total_number_episodes: req.body.total_number_episodes, 
    release_year: req.body.release_year, 
    rating: req.body.rating,  
    releaseSeasonId: req.body.releaseSeasonId, 
    release_season_id: req.body.release_season_id, 
    groupId: req.body.groupId, 
    group_id: req.body.group_id
  })
  newAnime.save();
});

//finde one

//update

//delete

//genres

const Genre = db.genre;

app.get("/genres", (req, res) => {
  genre.findAll().then((genre) => {
    res.json(genre);
  })
}); 


app.post("/genres", (req, res) => {
  const newGenre = new Genre({
    title: req.body.title,
  })
  newGenre.save();
});

//update

//delete

//finde one

//listen for request, setting the port
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const { anime, genre } = require("./app/models");
const swaggerJSDoc = require('swagger-jsdoc');
db.sequelize.sync();




