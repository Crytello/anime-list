const express = require('express');
const router = express.Router();
const models = require('../app/models'); 
const anime = models.anime;     

/**
 * @swagger
 * /animes:
 *  get:
 *    summary: Use to request all animes
 *    responses:
 *      200:
 *        description: collection of all stored animes
 */ 

router.get('/animes', (req, res) => {
    anime.findAll().then((anime) => {
        res.json(anime);
    });
});

/**
 * @swagger
 * /animes:
 *  post:
 *    summary: Use to insert new anime
 *    responses:
 *      200:
 *        description: store new anime
 */

router.post('/animes', (req, res) => {
    const newAnime = new anime({
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

  router.get('/anime/:animeId', (req, res) => {
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

router.put('/anime/:animeId', (req, res) => {
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

router.delete('/anime/:animeId', (req, res) => {
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

module.exports = router;
  
