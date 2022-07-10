const mongoose = require("mongoose");

const MetacriticReviewSchema = new mongoose.Schema({
    critic_name: {
        type: String,
        required: false
    },
    type: {
        type: String,
        required: false
    },
    review_content: {
        type: String,
        required: false
    },
    review_score: {
        type: Number,
        required: false
    },
    spoilers: {
        type: String,
        required: false
    },
    language: {
        type: String,
        required: false
    },
    movie_id: {
        type: String,
        required: false
    },
});
MetacriticReviewSchema.set('timestamps', true);
module.exports = mongoose.model('metacriticreview', MetacriticReviewSchema);