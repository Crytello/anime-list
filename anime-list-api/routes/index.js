const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /:
 *  get:
 *    summary: Used to check if database is connected and the api is working
 *    responses:
 *      200:
 *        description: working
 *
 */

router.get('/', (req, res) => {
  res.json({
    message:
      'Welcome to anime-list api. Seeing this message means it is working!',
  });
});

module.exports = router;
