const express = require('express')
const generator = require('../../utils/generator')
const URL = require('../../models/url')

const router = express.Router()

// 首頁
router.get('/', (req, res) => {
    res.render('index')
})

// Create shorten url
router.post("/", (req, res) => {
    if (!req.body.url) return res.redirect("/")
    const shortURL = generator(5)

    // Check if there's existed data
    URL.findOne({ urlOriginal: req.body.url })
        .then(
            data =>
            data ? data : URL.create({ shortURL, urlOriginal: req.body.url })
        )
        .then(data =>
            res.render("index", {
                origin: req.headers.origin,
                urlShorten: data.shortURL,
            })
        )
        .catch(error => console.error(error))
})

router.get("/:shortURL", (req, res) => {
    const { shortURL } = req.params

    URL.findOne({ shortURL })
        .then(data => {
            if (!data) {
                return res.render("error", {
                    errorMsg: "Can't found the URL",
                    errorURL: req.headers.host + "/" + shortURL,
                })
            }

            res.redirect(data.originalURL)
        })
        .catch(error => console.error(error))
})

module.exports = router