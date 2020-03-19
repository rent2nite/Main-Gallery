const db = require('./index.js');

const photoData = [];

for (var i = 0; i < 51; i++) {
  photoData.push(`https://rent2nite.s3.us-east-2.amazonaws.com/images/${i}.jpeg`);
}
db.save(photoData);

// Image.save((error) => {
//   if (error) {
//     console.log('Erro on seed', error);
//   } else {
//     console.log('successfully saved');
//   }
// });