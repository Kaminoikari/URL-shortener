const express = require('express')
const router = express.Router()
const generator = require('./generator')


router.get('/', (req, res) => {
    res.render('index')
})




// Generate shorten url
router.post('/', (req, res) => {

    const inputUrl = req.body.inputUrl.trim()
    const name = generateName(5)
    const origin = req.headers.origin

    if (!inputUrl) {
        return res.redirect('/')
    }

    Url.findOne({ inputUrl: inputUrl })
        .then(url =>
            url ? url : Url.create({ inputUrl, name })
        )
        .then(url => res.render('index', { inputUrl: url.inputUrl, origin, name: url.name }))
        .catch(error => console.log('herror'))
})


router.get('/:name', (req, res) => {
    return Url.findOne({ name: req.params.name })
        .then(url => {
            if (!url) {
                return res.render('error', { errorUrl: `${req.headers.host}/${req.params.name}` })
            }
            res.redirect(url.inputUrl)
        })
        .catch(error => console.log('error'))
})


module.exports = router