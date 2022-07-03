const mongoose = require("mongoose");

const TomatoSchema = new mongoose.Schema({
    movie_id: {
        type: String,
        required: false
    },
    tomatometer_count: {
        type: String,
        required: false
    },
    tomatometer_rating: {
        type: String,
        required: false
    },
    audience_rating: {
        type: String,
        required: false
    },
    audience_count: {
        type: String,
        required: false
    },
    link: {
        type: String,
        required: false
    },
});
TomatoSchema.set('timestamps', true);
module.exports = mongoose.model('TomatoRating', TomatoSchema);
