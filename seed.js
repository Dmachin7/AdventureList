const BucketList = require('./models/buckets')
const mongoose = require('mongoose')

const mongoURI = "mongodb+srv://Danieltayg:Shadow3264@danielsparadise.bnyuvcu.mongodb.net/?retryWrites=true&w=majority"
const db = mongoose.connection

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