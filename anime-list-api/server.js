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

/**
 * @swagger
 * /animes:
 *  post:
 *    summary: Use to insert new anime
 *    responses:
 *      200:
 *        description: store new anime
 */

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
app.get("/anime/:animeId", (req, res) => {
  anime.findByPk(req.params.animeId)
  .then(anime => {
    if (!anime) {
      return res.status(404).send({
        message: 'Anime Not Found',
      });
    }
    return res.status(200).send(anime);
  })
  .catch(error => res.status(400).send(error));
});

//update
app.put("/anime/:animeId", (req, res) => {
  anime.findByPk(req.params.animeId)
  .then(anime => {
    if (!anime) {
      return res.status(404).send({
        message: 'Anime Not Found',
      });
    }
    return anime.update({
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
    .then(() => res.status(200).send(anime))
    .catch((error) => res.status(400).send(error));
  })
  .catch(error => res.status(400).send(error));
});

//delete

app.delete("/anime/:animeId", (req, res) => {
  anime.findByPk(req.params.animeId)
  .then(anime => {
    if (!anime) {
      return res.status(404).send({
        message: 'Anime Not Found',
      });
    }
    return anime.destroy()
    .then(() => res.status(204).send())
    .catch((error) => res.status(400).send(error));
  })
  .catch(error => res.status(400).send(error));
});

//genres

const Genre = db.genre;

/**
 * @swagger
 * /genres:
 *  get:
 *    summary: Use to request all genres
 *    responses:
 *      200:
 *        description: collection of all stored genres
 */

app.get("/genres", (req, res) => {
  genre.findAll().then((genre) => {
    res.json(genre);
  })
}); 

/**
 * @swagger
 * /genres:
 *  post:
 *    summary: Use to insert new genre
 *    responses:
 *      200:
 *        description: insert new genre
 */

app.post("/genres", (req, res) => {
  const newGenre = new Genre({
    title: req.body.title,
  })
  newGenre.save();
});

//update

app.put("/genre/:genreId", (req, res) => {
  genre.findByPk(req.params.genreId)
  .then(genre => {
    if (!genre) {
      return res.status(404).send({
        message: 'Genre Not Found',
      });
    }
    return genre.update({
      title: req.body.title,
    })
    .then(() => res.status(200).send(genre))
    .catch((error) => res.status(400).send(error));
  })
  .catch(error => res.status(400).send(error));
});

//delete

app.delete("/genre/:genreId", (req, res) => {
  genre.findByPk(req.params.genreId)
  .then(genre => {
    if (!genre) {
      return res.status(404).send({
        message: 'Genre Not Found',
      });
    }
    return genre.destroy()
    .then(() => res.status(204).send())
    .catch((error) => res.status(400).send(error));
  })
  .catch(error => res.status(400).send(error));
});

//finde one
app.get("/genre/:genreId", (req, res) => {
  genre.findByPk(req.params.genreId)
  .then(genre => {
    if (!genre) {
      return res.status(404).send({
        message: 'Genre Not Found',
      });
    }
    return res.status(200).send(genre);
  })
  .catch(error => res.status(400).send(error));
});

//listen for request, setting the port
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const { anime, genre } = require("./app/models");
db.sequelize.sync();




