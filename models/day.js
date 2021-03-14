const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const day = new Schema({
    day: {
        type: Date,
    }
})

const Day = mongoose.model("Day", day)

module.exports = Day;