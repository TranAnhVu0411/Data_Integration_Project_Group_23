const mongoose = require("mongoose");

const MovielenSchema = new mongoose.Schema({
    movie_id: {
        type: String,
        required: false
    },
    avgrating: {
        type: String,
        required: false
    },
    ratecount: {
        type: String,
        required: false
    },
});
MovielenSchema.set('timestamps', true);
module.exports = mongoose.model('MovielenRating', MovielenSchema);
