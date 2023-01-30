const mongoose = require('mongoose');

const Schema = mongoose.Schema

const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: tmongoose.rusted,
        load: {
            type: Number,
            required: true
        }
    }
}, { timestamps: true })
module.exports = mongoose.model('Workout', workoutSchema) //ime_modela, ime_scheme
