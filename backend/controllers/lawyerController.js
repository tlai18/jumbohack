const Lawyer = require('../models/lawyerModel')
const mongoose = require('mongoose')

const getLawyers = async (req, res) => {


        try {
                let langFilter = {};
                console.error(req.query.lang); 
                if (req.query.lang == 'Any') {
                        langFilter = {}
                }
                else if (req.query.lang) {
                        // Capitalize the first letter of the input language
                        const capitalizedLang = req.query.lang.charAt(0).toUpperCase() + req.query.lang.slice(1).toLowerCase();
                    
                        langFilter = { 
                            languageSpoken: { $in: [capitalizedLang] } 
                        };
                }

                const lawyers = await Lawyer.find(langFilter);
                res.status(200).json(lawyers);
        } catch (error) {
                console.error(error);
                res.status(500).json({ error: 'An error occurred while fetching lawyers' });
        }
}

const getLawyer = async (req, res) => {
        const { id } = req.params

        if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(400).json({error: "No such meal swipe"})
        }
        const lawyer = await Lawyer.findById(id)
        if (!lawyer) {
                return res.status(400).json({error: "No such meal swipe"})
        }
        res.status(200).json(lawyer)
}

const createLawyer = async (req, res) => {
        const {
            name,
            pronouns,
            lawFirm,
            address,
            zipCode,
            website,
            languageSpoken,
            demographic,
            fieldsOfLaw,
            shortBiography
        } = req.body

        try {
            const lawyer = await Lawyer.create({
                name,
                pronouns,
                lawFirm,
                address,
                zipCode,
                website,
                languageSpoken,
                demographic,
                fieldsOfLaw,
                shortBiography
            });
            res.status(200).json(lawyer);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    };

const deleteLawyer = async (req, res) => {
        const { id } = req.params
        if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(404).json({error: "No such meal swipe"})
        }
        const lawyer = await Lawyer.findOneAndDelete({_id: id})
        if (!lawyer) {
                return res.status(404).json({error: "No such meal swipe"})
        } 
        res.status(200).json(lawyer)
}

const updateLawyer = async (req, res) => {
        const { id } = req.params

        if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(404).json({error: "No such meal swipe"})
        }
        const lawyer = await Lawyer.findOneAndUpdate({_id: id}, {
                ...req.body
        }, { new: true })

        if (!lawyer) {
                return res.status(404).json({error: "No such meal swipe"})
        } 
        // console.log('Successfully updated meal swipe:', mealswipe);
        res.status(200).json(lawyer)
}

module.exports = {
        getLawyers,
        getLawyer,
        createLawyer,
        deleteLawyer,
        updateLawyer
}