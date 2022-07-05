const movieController = require("../controller/MovieController");
const {asyncWrapper} = require("../utils/asyncWrapper");
const express = require("express");
const movieRoutes = express.Router();

movieRoutes.post(
    "/movieItem/:movieId",
    movieController.getMovieInfo);

movieRoutes.post(
    "/getList",
    movieController.getList);

movieRoutes.post(
    "/searchMovie",
    movieController.searchMovie);

module.exports = movieRoutes;