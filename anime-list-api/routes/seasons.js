const express = require('express');
const router = express.Router();
const models = require('../app/models');
const season = models.season;

/**
 * @swagger
 * /seasons:
 *  get:
 *    summary: Use to request all seasons
 *    responses:
 *      200:
 *        description: collection of all stored seasons
 */

router.get('/seasons', (req, res) => {
  season.findAll().then((season) => {
    res.json(season);
  });
});

/**
 * @swagger
 * /seasons:
 *  post:
 *    summary: Use to insert new season
 *    responses:
 *      200:
 *        description: insert new season
 */

router.post('/seasons', (req, res) => {
  const newSeason = new season({
    type: req.body.type,
    year: req.body.year,
  });
  newSeason.save();
});

router.put('/season/:seasonId', (req, res) => {
  season
    .findByPk(req.params.seasonId)
    .then((season) => {
      if (!season) {
        return res.status(404).send({
          message: 'Season Not Found',
        });
      }
      return season
        .update({
          type: req.body.type,
          year: req.body.year,
        })
        .then(() => res.status(200).send(season))
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
});

router.get('/season/:seasonId', (req, res) => {
  season
    .findByPk(req.params.seasonId)
    .then((season) => {
      if (!season) {
        return res.status(404).send({
          message: 'Season Not Found',
        });
      }
      return res.status(200).send(season);
    })
    .catch((error) => res.status(400).send(error));
});

router.delete('/season/:seasonId', (req, res) => {
  season
    .findByPk(req.params.seasonId)
    .then((season) => {
      if (!season) {
        return res.status(404).send({
          message: 'Season Not Found',
        });
      }
      return season
        .destroy()
        .then(() => res.status(204).send())
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
});

module.exports = router;
