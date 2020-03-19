const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mainGallery', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Welcome to the DB. How may I serve you?');
});

let imageSchema = mongoose.Schema({
  imagePath: String
});

let Image = mongoose.model("Image", imageSchema);

let save = (img) => {
  const image = new Image();

  image.save((err, img) => {
    if (err) {
      console.log(err);
    }
    console.log('Successfully added: ', img);
  })
}

const getImages = (callback) => {
  Image.find({})
    .then((data) => {
      callback(null, data);
    })
    .catch((error) => {
      callback(error);
    });
};

module.exports.getImages = getImages;
module.exports.save = save;