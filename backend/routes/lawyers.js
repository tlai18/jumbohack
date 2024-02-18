const express = require('express')
const {
        createLawyer,
        getLawyer,
        getLawyers,
        deleteLawyer,
        updateLawyer
} = require("../controllers/lawyerController")
const router = express.Router()


router.get('/', getLawyers)
router.get('/:id', getLawyer)
router.post('/', createLawyer)
router.delete('/:id', deleteLawyer)
router.patch('/:id', updateLawyer)
module.exports = router