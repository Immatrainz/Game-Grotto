const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost/gamelibrary");
}

const myGameSchema = new mongoose.Schema({
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

const MyGame = mongoose.model("MyGame", myGameSchema);

const addGames = (data) => {
  const newMyGame = new MyGame(data);
  return newMyGame.save();
};

const getWishlist = () => {
  return MyGame.find();
};

const checkGame = (id) => {
  return MyGame.find({ id: id });
};

module.exports = { addGames, getWishlist, checkGame };
