
// IMPORTS
const express = require('express')
const methodOverride = require('method-override')
const app = express()
const session = require('express-session')
const bcrypt = require('bcrypt')

app.use(express.static('public'))

require('dotenv').config()

const PORT = process.env.PORT || 3000

const secret = "Shadow3264"

app.use(express.urlencoded({ extended: true}))
app.use(methodOverride('_method'))
app.use(
    session({
        secret: secret,
        resave: false,
        saveUninitialized: false
    })
)

// setup database 
const mongoose = require('mongoose')
const mongoURI = process.env.MONGO_URI

// connect to mongo 
mongoose.connect(mongoURI)

const db = mongoose.connection
// optional create status messages to check mongo connection 
db.on('error', (err) => { console.log('ERROR: ' , err)})
db.on('connected', () => { console.log('mongo connected')})
db.on('disconnected', () => { console.log('mongo disconnected')})

// CONTROLLERS

const userController = require('./controllers/user.js')
const bucketsController = require('./controllers/buckets.js')

app.use('/user', userController)

app.use('/bucketlist', bucketsController)

app.get('/', (req, res) => {
   res.render('index.ejs')
})

app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})