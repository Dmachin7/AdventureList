const express = require('express')
const router = express.Router()

const BucketList = require('../models/buckets')

router.get('/list', async (req,res) => {
    const foundList = await BucketList.find({})
    console.log(foundList)
    res.render('blog.ejs', { Bucket: foundList, BucketList: BucketList})
})

router.get('/', (req,res) => {
    res.render('index.ejs')
})

router.get('/new', (req,res) => {
    res.render('new.ejs')
})

router.post('/list', async (req,res) => {
    try {
        console.log(req.body)
        const newItem = await BucketList.create(req.body)
        console.log(newItem)
        res.redirect('/bucketlist/list')
    } catch (err) {
        console.log(err)
        res.status(500).send(err)
    }
})


module.exports = router