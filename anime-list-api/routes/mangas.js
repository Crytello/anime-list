const express = require('express');
const router = express.Router();
const models = require('../app/models'); 
const manga = models.manga;     

/**
 * @swagger
 * /mangas:
 *  get:
 *    summary: Use to request all mangas
 *    responses:
 *      200:
 *        description: collection of all stored mangas
 */ 

router.get('/mangas', (req, res) => {
    manga.findAll().then((manga) => {
        res.json(manga);
    });
});

/**
 * @swagger
 * /mangas:
 *  post:
 *    summary: Use to insert new manga
 *    responses:
 *      200:
 *        description: store new manga
 */

router.post('/mangas', (req, res) => {
    const newManga = new manga({
      title_jp: req.body.title_jp,
      title_eng: req.body.title_eng,
      title_ger: req.body.title_ger,  
      status: req.body.status, 
      end_date: req.body.end_date, 
      publisher: req.body.publisher, 
      current_volume: req.body.current_volume, 
      total_number_volumes: req.body.total_number_volumes, 
      release_year: req.body.release_year, 
      rating: req.body.rating,  
    })
    newManga.save();
  });

  router.get('/manga/:mangaId', (req, res) => {
    manga.findByPk(req.params.mangaId)
    .then(manga => {
      if (!manga) {
        return res.status(404).send({
          message: 'Manga Not Found',
        });
      }
      return res.status(200).send(manga);
    })
    .catch(error => res.status(400).send(error));
});

router.put('/manga/:mangaId', (req, res) => {
    manga.findByPk(req.params.mangaId)
    .then(manga => {
      if (!manga) {
        return res.status(404).send({
          message: 'Manga Not Found',
        });
      }
      return manga.update({
        title_jp: req.body.title_jp,
        title_eng: req.body.title_eng,
        title_ger: req.body.title_ger,  
        status: req.body.status, 
        end_date: req.body.end_date, 
        publisher: req.body.publisher, 
        current_volume: req.body.current_volume, 
        total_number_volumes: req.body.total_number_volumes, 
        release_year: req.body.release_year, 
        rating: req.body.rating,
      })
      .then(() => res.status(200).send(manga))
      .catch((error) => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
});

router.delete('/manga/:mangaId', (req, res) => {
    manga.findByPk(req.params.mangaId)
    .then(manga => {
      if (!manga) {
        return res.status(404).send({
          message: 'Manga Not Found',
        });
      }
      return manga.destroy()
      .then(() => res.status(204).send())
      .catch((error) => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
});

/**
 * @swagger
 * /mangas/last-updated-episode:
 *  get:
 *    summary: Use to request latest current updated manga-episode
 *    responses:
 *      200:
 *        description: collection of latest current updated manga-episode
 */ 

 router.get('/mangas/last-updated-episode', (req, res) => {
  manga.findAll({
    limit: 1,
    order: [ [ 'updatedAt', 'ASC' ]]
  }).then((manga) => {
      res.json(manga);
  });
});

module.exports = router;
  
