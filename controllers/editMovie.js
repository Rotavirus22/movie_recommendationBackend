const mongoose = require("mongoose");

const editMovie = async (req, res) => {
  const moviesModel = mongoose.model("movies");

  const { movie_id, movie_name, info, thumbnail, description, ratings } =
    req.body;

  try {
    await moviesModel.updateOne(
      {
        _id: movie_id,
      },
      {
        movie_name: movie_name,
        info: info,
        ratings: ratings,
        thumbnail: thumbnail,
        description: description,
      },
      {
        runValidators: true,
      }
    );
    res.status(200).json({
      status: "Success",
      message: "Movie edited successfully",
    });
  } catch (e) {
    res.status(400).json({
      status: "Failed",
      message: e.message,
    });
  }
};
module.exports = editMovie;
