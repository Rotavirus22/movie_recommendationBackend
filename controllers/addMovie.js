const mongoose = require("mongoose");

const addMovie = async (req, res) => {
  const moviesModel = mongoose.model("movies");
  //deconstructing so that only info that are relevant gets in.
  const { movie_name, info, thumbnail, description, ratings } = req.body;

  //validations

  if (!movie_name) throw "Movie Name must be Provided";
  if (!info) throw "Info must be Provided";
  if (!ratings) throw "Ratings must be Provided";

  res.status(400).json({
    status: "failed",
    message: e,
  });

  //saving the info to the database

  const createdMovie = await moviesModel.create({
    movie_name: movie_name,
    info: info,
    thumbnail: thumbnail,
    description: description,
    ratings: ratings,
  });

  res.status(400).json({
    status: "failed",
    message: "Movie creation Failed. Something went wrong",
  });

  //success
  res.status(200).json({
    status: "Suceess",
    message: "Movie Added Successfully",
  });
};
module.exports = addMovie;
