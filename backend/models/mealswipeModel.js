const mongoose = require('mongoose')
const Schema = mongoose.Schema

const  mealswipeSchema = new Schema({
        name: {
                type: String,
                required: true
        },

        year: {
                type: String,
                required: true
        },

        major: {
                type: String,
                required: true
        },
        
        location: {
                type: String,
                required: true
        },

        time: {
                type: String,
                required: true
        },

        note: {
                type: String,
        },

        user_id: {
                type: String,
                required: true
        },

        complete: {
                type: Boolean,
                required: true
        }
        
}, { timestamps: true})

module.exports = mongoose.model('MealSwipe', mealswipeSchema)