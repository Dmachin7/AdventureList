const BucketList = require('./models/buckets')
const mongoose = require('mongoose')
require('dotenv').config()

const mongoURI = process.env.MONGO_URI

mongoose.connect(mongoURI)

BucketList.create([
    {
    title: 'Skydiving',
    moreInfo: "Going Skydiving",
    completed: false,
    owner: "DanielTAYG"
    },
    {
    title: "Going to Tokyo", 
    moreInfo: "Plan a trip to tokyo",
    completed: false,
    owner: "DanielTAYG"
    }
]).then((bucket) => {
    console.log(bucket)
    db.close()
})