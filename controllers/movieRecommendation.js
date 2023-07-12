const { configuration, OpenAIApi, Configuration } = require("openai");
const mongoose = require("mongoose");

const movieRecommendation = async (req, res) => {
  const moviesModel = mongoose.model("movies");
  const allMovies = await moviesModel.find({});

  const moviesString = allMovies.map((el) => el.movie_name).join(",");

  const prompt = `I need a movie suggestion based on the these movies: ${moviesString} . Provide me 5 suggestion with a comma separation`;

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
  });
  res.status(200).json({
    suggestions: completion.data.choices[0].text,
  });
};
module.exports = movieRecommendation;
