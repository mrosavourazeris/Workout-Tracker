const mongoose = require("mongoose")

const Schema = mongoose.Schema;


const Exercises = new Schema({
    type: {
        type: String,
        trim: true,
        required: "Input is required"
    },

    name: {
        type: String,
        trim: true,
        required: "Input is required"
    }, 

    duration: {
        type: Number,
        trim: true,
        required: "Input is required"
    },

    weight: {
        type: Number,
        trim: true,
        required: "Input is required"
    },

    reps: {
        type: Number,
        trim: true,
        required: "Input is required"
    },

    sets: {
        type: Number,
        trim: true,
        required: "Input is required"
    },
})

const WorkoutSchema = new Schema({
    day: {
        type: Date,
    },
    exercises: [Exercises],
})


const Workout = mongoose.model("Workout", WorkoutSchema)

module.exports = Workout;