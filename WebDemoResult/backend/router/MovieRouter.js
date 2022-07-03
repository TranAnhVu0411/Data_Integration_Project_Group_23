const movieController = require("../controller/MovieController");
const {asyncWrapper} = require("../utils/asyncWrapper");
const express = require("express");
const movieRoutes = express.Router();

movieRoutes.post(
    "/search",
    movieController.search);

module.exports = movieRoutes;