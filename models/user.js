const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})

const User = mongoose.model('User', UserSchema)

module.exports = User