const mongoose = require('mongoose')
const Schema = mongoose.Schema
const urlSchema = new Schema({
    urlOriginal: {
        type: String,
        required: true
    },

    urlShorten: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('URL', urlSchema)