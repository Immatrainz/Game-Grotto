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

// const codingSim = new MyGame({
//   id: 34857384573607,
//   slug: "coding-sim",
//   name: "Coding Simulator",
//   released: "2023-04-20",
//   tba: false,
//   background_image: "/assets/codingsim.png",
//   rating: 5.0,
//   rating_top: 5,
//   ratings: [],
//   ratings_count: 0,
//   reviews_text_count: 0,
//   added: 9999,
//   added_by_status: {},
//   metacritic: 100,
//   playtime: 9999,
//   suggestions_count: 0,
//   updated: "2023-04-23T10:53:38",
//   user_game: null,
//   reviews_count: 0,
//   saturated_color: "0f0f0f",
//   dominant_color: "0f0f0f",
//   platforms: ["PC"],
//   parent_platforms: [],
//   genres: ["Adventure", "Action", "RPG", "Indie"],
//   stores: [],
//   clip: null,
//   tags: ["Singleplayer", "Puzzle", "Atmospheric", "Story Rich", "First Person"],
//   esrb_rating: { id: 1, name: "Everyone", slug: "everyone" },
//   short_screenshots: ["assets/codingsim.png"],
//   __v: 0,
// });

// codingSim.save();

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
