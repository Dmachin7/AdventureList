const mongoose = require('mongoose')

const bucketSchema = new mongoose.Schema({
    listItem: {type: String, required: true},
    completed: Boolean
})

const BucketList = mongoose.model('BucketList', bucketSchema)

module.exports = BucketList