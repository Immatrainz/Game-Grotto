const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const axios = require("axios");
const db = require('./db/index.js');

app.use(express.static(path.join(__dirname, '../public/')));
app.use(express.json());

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});


// const options = {
//   method: 'GET',
//   url: 'https://api.rawg.io/api/games',
//   params: {
//     key: '5f7521f30d86436e9fd3c6ceadefeaaa',
//     page: 51,
//     page_size: 40
//   }
// };

// axios.request(options).then(function (response) {
//   //console.log(response);
//   let data = response.data.results;
//   data.forEach(game => {
//     db.topRatedGames(game);
//   })
// }).catch(function (error) {
// 	console.error(error);
// });

app.get('/games/top', (req, res) => {
  return db.getTopRatedGames()
  .then (data => {
    res.send(data);
  })
  .catch(err => {
    console.log(err);
  })
})

app.get('/games/new', (req, res) => {
  return db.getNewGames()
  .then (data => {
    res.send(data);
  })
  .catch(err => {
    console.log(err);
  })
})

app.get('/products/genre', (req, res) => {
  console.log(req.query.genre);
  return db.getByGenre(req.query.genre)
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    console.log(err);
  })
  res.end();
})
