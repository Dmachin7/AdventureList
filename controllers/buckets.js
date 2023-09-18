const express = require('express')
const router = express.Router()

const BucketList = require('../models/buckets')

router.get('/list', async (req,res) => {

    // let foundList = await BucketList.find({})
    // for(let i = 0; i > foundList.length; i++) {
    //     if(req.session.username.username !== foundList[i].owner) {
    //         console.log("It Worked")
    //     } else {
    //         console.log("It didnt work")
    //     }
    // }
    // res.render('blog.ejs', { Bucket: foundList, BucketList: BucketList})
    try {
        const sessionUsername = req.session.username.username

        const foundList = await BucketList.find({})

        const filteredList = foundList.filter((item) => item.owner === sessionUsername)

        res.render('blog.ejs', {Bucket: filteredList})
    } catch (err) {
        console.error(err)
        res.status(500).send('Internal Server Error')
    }
})

router.get('/', (req,res) => {
    res.render('index.ejs')
})

router.get('/new', (req,res) => {
    res.render('new.ejs')
})

router.post('/list', async (req,res) => {
    try {
        console.log(req.session)
        console.log(req.body)
        // const newItem = await BucketList.create(req.body)
        // console.log(newItem)
        res.redirect('/bucketlist/list')
    } catch (err) {
        console.log(err)
        res.status(500).send(err)
    }
})


module.exports = router