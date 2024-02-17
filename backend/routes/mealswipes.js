const express = require('express')
const {
        createMealSwipe,
        getMealSwipe,
        getMealSwipes,
        deleteMealSwipe,
        updateMealSwipe
} = require("../controllers/mealswipeController")
// const requireAuth = require('../middleware/requireAuth')
const router = express.Router()

// require auth for all MealSwipe routes
// router.use(requireAuth)

router.get('/', getMealSwipes)
router.get('/:id', getMealSwipe)
router.post('/', createMealSwipe)
router.delete('/:id', deleteMealSwipe)
router.patch('/:id', updateMealSwipe)
module.exports = router