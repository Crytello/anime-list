const express = require('express');
const router = express.Router();
const models = require('../app/models');
const genre = models.genre;

/**
 * @swagger
 * /genres:
 *  get:
 *    summary: Use to request all genres
 *    responses:
 *      200:
 *        description: collection of all stored genres
 */

router.get('/genres', (req, res) => {
  genre.findAll().then((genre) => {
    res.json(genre);
  });
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

router.post('/genres', (req, res) => {
  const newGenre = new genre({
    title: req.body.title,
  });
  newGenre.save();
});

router.put('/genre/:genreId', (req, res) => {
  genre
    .findByPk(req.params.genreId)
    .then((genre) => {
      if (!genre) {
        return res.status(404).send({
          message: 'Genre Not Found',
        });
      }
      return genre
        .update({
          title: req.body.title,
        })
        .then(() => res.status(200).send(genre))
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
});

router.get('/genre/:genreId', (req, res) => {
  genre
    .findByPk(req.params.genreId)
    .then((genre) => {
      if (!genre) {
        return res.status(404).send({
          message: 'Genre Not Found',
        });
      }
      return res.status(200).send(genre);
    })
    .catch((error) => res.status(400).send(error));
});

router.delete('/genre/:genreId', (req, res) => {
  genre
    .findByPk(req.params.genreId)
    .then((genre) => {
      if (!genre) {
        return res.status(404).send({
          message: 'Genre Not Found',
        });
      }
      return genre
        .destroy()
        .then(() => res.status(204).send())
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
});

module.exports = router;
