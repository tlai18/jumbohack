const MealSwipe = require('../models/mealswipeModel')
const mongoose = require('mongoose')

const getMealSwipes = async (req, res) => {
        const user_id = req.user._id
        const mealswipes = await MealSwipe.find({}).sort({createdAt: -1}) // everyone to see
        // const mealswipes = await MealSwipe.find({user_id}).sort({createdAt: -1})
        res.status(200).json(mealswipes)
}

const getMealSwipe = async (req, res) => {
        const { id } = req.params

        if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({error: "No such meal swipe"})
        }
        const mealswipe = await MealSwipe.findById(id)
        if (!mealswipe) {
                return res.status(400).json({error: "No such meal swipe"})
        }
        res.status(200).json(mealswipe)
}

const createMealSwipe = async (req, res) => {
        const {name, year, major, location, time} = req.body
        let emptyFields = []

        if (!name) {
                emptyFields.push('name');
        }
        
        if (!year) {
                emptyFields.push('year');
        }
        
        if (!major) {
                emptyFields.push('major');
        }
        
        if (!location) {
                emptyFields.push('location');
        }
        
        const regex = /^(?:0?[1-9]|1[0-2]):(?:[0-5]?[0-9])\s(?:AM|PM)$/;
        if (!time || !(regex.test(time))) {
                emptyFields.push('time');
        }

        if (emptyFields.length > 0) {
                return res.status(404).json({error: 'Please fill in all the fields', emptyFields})
        }

        try {
                const user_id = req.user._id
                const mealswipe = await MealSwipe.create({name, year, major, location, time, user_id})
                res.status(200).json(mealswipe)
        } catch (error) {
                res.status(404).json({error: error.message})
        }
}

const deleteMealSwipe = async (req, res) => {
        const { id } = req.params
        if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(404).json({error: "No such meal swipe"})
        }
        const mealswipe = await MealSwipe.findOneAndDelete({_id: id})
        if (!mealswipe) {
                return res.status(404).json({error: "No such meal swipe"})
        } 
        res.status(200).json(mealswipe)
}

const updateMealSwipe = async (req, res) => {
        const { id } = req.params

        if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(404).json({error: "No such meal swipe"})
        }
        const mealswipe = await MealSwipe.findOneAndUpdate({_id: id}, {
                ...req.body
        })

        if (!mealswipe) {
                return res.status(404).json({error: "No such meal swipe"})
        } 

        res.status(200).json(mealswipe)
}

module.exports = {
        getMealSwipes,
        getMealSwipe,
        createMealSwipe,
        deleteMealSwipe,
        updateMealSwipe
}