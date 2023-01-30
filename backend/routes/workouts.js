const express = require('express');
const Workout = require('../models/workoutModel');
const workoutModel = require('../models/workoutModel');
const router = express.Router()

router.get('/', (req, res) => {
    res.json({ msg: "all worcouts" })
})

router.get(':id', async (res, req) => {
    res.json({ msg: "get single worcout" })
})
//POST new workout
router.post('/', async (req, res) => {
    const { title, load, reps } = req.body
    try {
        const workout = await Workout.create({
            title, load, reps
        })
        res.status(200).json(workout)
    } catch (error) {
        res.status(404).json({ error: error.mesage })
    }
    res.json({ msg: "post a new worcout" })
})
router.delete('/:id', (req, res) => {
    res.json({ msg: "delete new worcout" })
})
router.patch('/:id', (req, res) => {
    res.json({ msg: "update new worcout" })
})

module.exports = router