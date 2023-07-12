const mongoose = require("mongoose");

const getSingleMovie = async (req, res) => {
  //accessing the database
  const moviesModel = mongoose.model("movies");

  //finding the data of the database

  const moviesData = await moviesModel.findOne({
    _id: req.params.movie_id,
  });

  res.status(200).json({
    status: "success",
    data: moviesData,
  });

  res.status(200).json({
    status: "failed",
    message: e.message,
  });
};
module.exports = getSingleMovie;
