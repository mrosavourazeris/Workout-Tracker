const router = require("express").Router();
const db = require("../models")

router.post("/api/workouts", (req, res) => {
    console.log(req.body)
    db.Workout.create(req.body)
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err)
        })
})

router.put("/api/workouts/:id", (req,res) => {
    console.log(req.body)
    const body = req.body
    console.log(req.params.id)
    const id = req.params.id
    db.Workout.findByIdAndUpdate(id, {$push: {exercises: body }}, {new: true})
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        res.status(400).json(err)
    })
})


router.get("/api/workouts", (req, res) => {
    db.Workout.aggregate([
        {
            $addFields: {
                totalDuration: {$sum: "$exercises.duration"}
            }
        }
    ])
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        res.status(400).json(err)
    })
})


module.exports = router