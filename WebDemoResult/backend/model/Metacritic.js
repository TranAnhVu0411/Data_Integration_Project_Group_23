const mongoose = require("mongoose");

const MetacriticSchema = new mongoose.Schema({
    movie_id: {
        type: String,
        required: false
    },
    avgrating: {
        type: String,
        required: false
    },
    link: {
        type: String,
        required: false
    },
    ratecount: {
        type: String,
        required: false
    },
});
MetacriticSchema.set('timestamps', true);
module.exports = mongoose.model('MetacriticRating', MetacriticSchema);
