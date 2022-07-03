const mongoose = require("mongoose");

const TmdbSchema = new mongoose.Schema({
    movie_id: {
        type: String,
        required: false
    },
    avgrate: {
        type: String,
        required: false
    },
    ratecount: {
        type: String,
        required: false
    },
});
TmdbSchema.set('timestamps', true);
module.exports = mongoose.model('TmdbRating', TmdbSchema);
