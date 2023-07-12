require("express-async-errors");

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const addMovie = require("./controllers/addMovie");
const getAllMovies = require("./controllers/getAllMovies");

const mongoose = require("mongoose");
const getSingleMovie = require("./controllers/getSingleMovie");
const editMovie = require("./controllers/editMovie");
const deleteMovie = require("./controllers/deleteMovie");
const movieRecommendation = require("./controllers/movieRecommendation");
const errorHandler = require("./handlers/errorHandler");

mongoose
  .connect(process.env.mongo_connection, {})
  .then(() => {
    console.log("Connection to mongoDB is successful");
  })
  .catch(() => {
    console.log("Connection to mongoDB is failed");
  });

const app = express();
app.use(cors());

//marking express to accept the json
app.use(errorHandler);
app.use(express.json());

//Model
require("./models/movie.model");

//Routes
app.post("/api/movies", addMovie);
app.get("/api/movies", getAllMovies);
app.get("/api/movies/:movie_id", getSingleMovie);
app.patch("/api/movies", editMovie);
app.delete("/api/movies/:movie_id", deleteMovie);

app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "Failed",
    message: "Not Found",
  });
});

//open ai
app.get("/api/movies/openai/getRecommendations", movieRecommendation);

app.listen(8000, () => {
  console.log("Server Started Successfully");
});
