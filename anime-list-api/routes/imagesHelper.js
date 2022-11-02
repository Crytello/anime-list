module.exports = {
  //todo: add possiblity to upload for different kinds of medias (anime or manga)
  imageUpload: function (image, title) {
    image.mv(`../anime-list-api/images/${title}`, function (err) {
      if (err) {
        console.log(err + 'hit');
        return res.status(500).send({ msg: 'Error occured' + err });
      }
    });
  },
};
