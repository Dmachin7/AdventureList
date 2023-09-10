const express = require('express')
const router = express.Router()

const BucketList = require('../models/buckets')

router.get('/', (req,res) => {
    res.render('index.ejs')
})

module.exports = router