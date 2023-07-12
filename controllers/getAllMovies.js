const mongoose = require("mongoose");

const getAllMovies = async (req, res) => {
  //accessing the database
  const moviesModel = mongoose.model("movies");

  //finding the data of the database
  const moviesData = await moviesModel.find({});

  res.status(200).json({
    status: "success",
    data: moviesData,
  });
};
module.exports = getAllMovies;
