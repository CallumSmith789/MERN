const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect(uri, options);

const moviesSchema = new Schema({
    movieName: {
        type: String,
        required: true,
        minlength: 2
    },
    ageRating: {
        type: Number,
        required: true,
        min: 0,
        max: 18
    },
    seatRow: {
        type: String,
        required: true,
        maxlength: 1
    },
    seatNo: {
        type: Number,
        required: true,
        maxlength: 1
    },
});

module.exports = mongoose.model("Person", personSchema);