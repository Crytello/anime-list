const express = require('express');
const router = express.Router(); 

/**
* @swagger
* /images:
*  get:
*    summary: Use to request all images
*    responses:
*      200:
*        description: collection of all stored images
*/

router.post('/upload-image', (req, res) => {
   if (!req.files) {
    return res.status(500).send({ msg: "file is not found"})
  }; 

  const image = req.files.file;
  image.mv(`../anime-list-api/images/${image.name}`, function (err) {
    if (err) {
        console.log(err)
        return res.status(500).send({ msg: "Error occured" + err});
    }

    return res.send({name: image.name, path: `/${image.name}`});
  });
}); 


module.exports = router;
  
