const express = require("express");
const movieRoutes = require("../MovieRouter");

const apiRoutes = express.Router();

apiRoutes.use("/movie", movieRoutes);

apiRoutes.get(
    "/", (req, res) => res.json({ api: "is-working" })
);
module.exports = apiRoutes;