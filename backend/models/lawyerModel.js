const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lawyerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    pronouns: {
        type: String,
        required: true
    },
    lawFirm: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    zipCode: {
        type: String,
        required: true
    },
    website: {
        type: String
    },
    languageSpoken: {
        type: [String], // Array of strings to allow for multiple languages
        required: true
    },
    demographic: {
        type: String
    },
    fieldsOfLaw: {
        type: [String], // Array of strings to accommodate multiple fields of law
        required: true
    },
    shortBiography: {
        type: String
    }
}, { timestamps: true });

module.exports = mongoose.model('Lawyer', lawyerSchema, 'lawyers');
