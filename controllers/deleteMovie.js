const mongoose = require("mongoose");

const deleteMovie = async (req, res) => {
  const moviesModel = mongoose.model("movies");

  const movie_id = req.params.movie_id;

  const getMovie = await moviesModel.findOne({
    _id: movie_id,
  });

  if (!getMovie) throw "This movie doesnot exist in the database";
  res.status(400).json({
    status: "failed",
    message: e.message,
  });

  await moviesModel.deleteOne({
    _id: movie_id,
  });
  res.status(400).json({
    status: "Failed",
    message: e,
  });

  res.status(200).json({
    status: "Success",
    message: "Movie Deleted Successfully",
  });
};
module.exports = deleteMovie;
