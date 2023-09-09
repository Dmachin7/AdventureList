
// IMPORTS
const express = require('express')
const app = express()

require('dotenv').config()

const PORT = process.env.PORT || 3000

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

app.get('/', (req, res) => {
   res.send('Hello world!')
})

app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})