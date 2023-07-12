const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema({
  movie_name: {
    type: String,
  },
  info: {
    type: String,
  },
  thumbnail: {
    type: String,
  },
  description: {
    type: String,
  },
  ratings: {
    type: Number,
  },
});

const moviesModel = mongoose.model("movies", moviesSchema);
module.exports = moviesModel;
