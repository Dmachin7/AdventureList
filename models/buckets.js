const mongoose = require('mongoose')

const bucketSchema = new mongoose.Schema({
    title: {type: String, required: true},
    moreInfo: {type: String, required: true},
    completed: Boolean,
    owner: String
})

const BucketList = mongoose.model('BucketList', bucketSchema)

module.exports = BucketList