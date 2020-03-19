const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;
const db = require('../database/index.js')


app.use(express.static(path.resolve(__dirname, '../client/dist')));

// app.get('/api/images', (req, res) =>
//   res.send('Hello World!'));
app.get('/api/images', (req, res) => {
  console.log('GET from server')

  db.getImages((error, data) => {
    if (error) {
      res.sendStatus(404);
    } else {
      res.send(data);
    }
  })
})

// Unknown get request
app.get('*', (req, res) => (
  res.send("You are a star!")
));


app.listen(port, console.log(`App is listening on port: ${port}`));