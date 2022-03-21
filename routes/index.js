// 引入express
const express = require('express')

// 引入home
const home = require('./modules/home')

// 引入路由
const router = express.Router()

// 符合 / 字串，即導向home page
router.use('/', home)

// 匯出路由
module.exports = router