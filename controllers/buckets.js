const express = require('express')
const router = express.Router()

const BucketList = require('../models/buckets')
const session = require('express-session')

router.get('/list', async (req,res) => {
    try {
        const sessionUsername = req.session.username.username
        console.log(sessionUsername)
        const foundList = await BucketList.find({})

        const filteredList = foundList.filter((item) => item.owner === sessionUsername)

        res.render('blog.ejs', {Bucket: filteredList})
    } catch (err) {
        console.error(err)
        res.status(500).send('Internal Server Error')
    }
})

router.get('/list/:id', async (req,res) => {
    const foundItem = await BucketList.findById(req.params.id)
    res.render('show.ejs', {Bucket: foundItem})
    
})
router.get('/list/:id/edit', async (req,res) => {
    const foundItem = await BucketList.findById(req.params.id)
    res.render('edit.ejs', {Bucket: foundItem})
})
router.get('/', (req,res) => {
    res.render('index.ejs')
})

router.get('/new', (req,res) => {
    res.render('new.ejs')
})


router.post('/list/:id', async (req,res) => {
    try {
        const sessionUsername = req.session.username.username
        console.log(req.session)
        console.log(req.body)
        req.body.owner = sessionUsername
        const newItem = await BucketList.create(req.body)
        console.log(newItem)
        req.session.username.username = sessionUsername
        res.redirect('/bucketlist/list')
    } catch (err) {
        console.log(err)
        res.status(500).send(err)
    }
})

router.post('/list', async (req,res) => {
    try {
        const sessionUsername = req.session.username.username
        console.log(req.session)
        console.log(req.body)
        req.body.owner = sessionUsername
        const newItem = await BucketList.create(req.body)
        console.log(newItem)
        req.session.username.username = sessionUsername
        res.redirect('/bucketlist/list')
    } catch (err) {
        console.log(err)
        res.status(500).send(err)
    }
})

router.delete('/list/:id', async (req,res) => {
    try {
        const item = await BucketList.findByIdAndDelete(req.params.id)
        console.log('deleted item' + item)
        res.redirect('/bucketlist/list')
    } catch (err) {
        console.log("Error", err)
        res.status(500).send(err)
    }
})


module.exports = router