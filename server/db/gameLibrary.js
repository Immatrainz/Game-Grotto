const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost/gamelibrary");
}

const gameSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  slug: String,
  name: String,
  released: String,
  tba: Boolean,
  background_image: String,
  rating: Number,
  rating_top: Number,
  ratings: Array,
  ratings_count: Number,
  reviews_text_count: Number,
  added: Number,
  added_by_status: Object,
  metacritic: Number,
  playtime: Number,
  suggestions_count: Number,
  updated: String,
  user_game: Number,
  reviews_count: Number,
  saturated_color: String,
  dominant_color: String,
  platforms: Array,
  parent_platforms: Array,
  genres: Array,
  stores: Array,
  clip: String,
  tags: Array,
  esrb_rating: Object,
  short_screenshots: Array,
});

const Game = mongoose.model("Game", gameSchema);

const topRatedGames = (data) => {
  const newGame = new Game(data);
  newGame.save();
};

const getTopRatedGames = () => {
  return Game.find().limit(10);
};

const getNewGames = () => {
  return Game.find().sort({ updated: -1 }).limit(5);
};

const getByGenre = (genre) => {
  return Game.find({ "genres.name": genre }).sort({ rating: -1 }).limit(7);
};

const getByGenre50 = (genre) => {
  return Game.find({ "genres.name": genre }).sort({ rating: -1 }).limit(64);
};

const getAllGames = () => {
  return Game.find();
};
module.exports = {
  topRatedGames,
  getTopRatedGames,
  getNewGames,
  getByGenre,
  getByGenre50,
  getAllGames,
};
