const { Decimal128 } = require("mongodb");
const mongoose = require("mongoose");

const TomatoReviewSchema = new mongoose.Schema({
    critic_name: {
        type: String,
        required: false
    },
    top_critic: {
        type: Boolean,
        required: false
    },
    publisher_name: {
        type: String,
        required: false
    },
    review_type: {
        type: String,
        required: false
    },
    review_score: {
        type: Decimal128,
        required: false
    },
    review_date: {
        type: Date,
        required: false
    },
    review_content: {
        type: String,
        required: false
    },
    movie_id: {
        type: String,
        required: false
    },
});
TomatoReviewSchema.set('timestamps', true);
module.exports = mongoose.model('tomatoReview', TomatoReviewSchema);