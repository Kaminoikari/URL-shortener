const express = require('express')
const url = require('../../models/url')
const generator = require('./generator')
const router = express.Router()


// Show Home Page
router.get('/', (req, res) => {
    res.render('index')
})

// Send Original URL and receive short URL
router.post('/', (req, res) => {
    if (!req.body.url)
        return res.redirect('/')
    const shortURL = generator(5)

    URL.findOne()
})



module.exports = router