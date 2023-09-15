const express = require('express')
const router = express.Router()

const BucketList = require('../models/buckets')

router.get('/', (req,res) => {
    res.render('index.ejs')
})

router.get('/list', (req,res) => {
    res.render('blog.ejs')
})

module.exports = router