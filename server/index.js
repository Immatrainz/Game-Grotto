const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const axios = require("axios");
const db = require("./db/gameLibrary.js");
const myGames = require("./db/myGames.js");

app.use(express.static(path.join(__dirname, "../public/")));
app.use(express.json());

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

// const options = {
//   method: "GET",
//   url: "https://api.rawg.io/api/games",
//   params: {
//     key: "5f7521f30d86436e9fd3c6ceadefeaaa",
//     page: 101,
//     page_size: 40,
//   },
// };

// axios
//   .request(options)
//   .then(function (response) {
//     //console.log(response);
//     let data = response.data.results;
//     data.forEach((game) => {
//       db.topRatedGames(game);
//     });
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

app.get("/games/top", (req, res) => {
  return db
    .getTopRatedGames()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/games/new", (req, res) => {
  return db
    .getNewGames()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/games/genre", (req, res) => {
  console.log(req.query.genre);
  return db
    .getByGenre(req.query.genre)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
  res.end();
});

app.get("/games/genrepage", (req, res) => {
  console.log(req.query.genre);
  return db
    .getByGenre50(req.query.genre)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
  res.end();
});

app.get("/games/details", (req, res) => {
  axios
    .get(`https://api.rawg.io/api/games/${req.query.id}`, {
      params: { key: "5f7521f30d86436e9fd3c6ceadefeaaa" },
    })
    .then((data) => {
      //console.log(data.data);
      res.send(data.data);
    })
    .catch((err) => {
      console.log(err);
    });
  //console.log(req.query.id);
});

app.get("/games/trailers", (req, res) => {
  axios
    .get(`https://api.rawg.io/api/games/${req.query.id}/movies`, {
      params: { key: "5f7521f30d86436e9fd3c6ceadefeaaa" },
    })
    .then((data) => {
      //console.log(data.data.results[0].data);
      res.send(data.data.results);
    })
    .catch((err) => {
      console.log(err);
    });
  console.log(req.query.id);
});

app.post("/wishlist", (req, res) => {
  //console.log(req.body);
  return myGames
    .addGames(req.body.game)
    .then((data) => {
      console.log("posted");
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/wishlist", (req, res) => {
  return myGames
    .getWishlist()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/wishlist/game", (req, res) => {
  return myGames
    .checkGame(req.query.id)
    .then((data) => {
      if (data.length === 0) {
        res.send(false);
      } else {
        res.send(true);
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});
