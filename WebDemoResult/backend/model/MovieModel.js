const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
    movie_id: {
        type: String,
        required: false
    },
    movie_title: {
        type: String,
        required: false
    },
    movie_info: {
        type: String,
        required: false
    },
    genres: {
        type: String,
        required: false
    },
    directors: {
        type: String,
        required: false,
    },
    actors: {
        type: String,
        required: false,
    },
    release_date: {
        type: String,
        required: false,
    },
    runtime: {
        type: String,
        required: false,
    },
    content_rating: {
        type: String,
        required: false,
    },
    image: {
        type: String,
        required: false,
    },
});
MovieSchema.set('timestamps', true);
module.exports = mongoose.model('movie', MovieSchema);
