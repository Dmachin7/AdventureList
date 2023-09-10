const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const User = require('../models/user.js')

router.get('/', (req,res) => {
    res.render('newUser.ejs')
})

router.get('/login', (req,res) => {
    res.render('login.ejs')
})

router.post('/', async (req, res) => {
    try {
      console.log('before hash: ', req.body)
      req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
      console.log('after hash: ', req.body)
      const newUser = await User.create(req.body)
      req.session.currentUser = newUser
      res.redirect('/bucketlist')
    } catch (err) {
      console.log(err)
      res.status(500).send('Please try a different username or password.')
    }
    console.log(req.body)
  })

  router.post('/login', async (req, res) => {
    try {
      const foundUser = await User.findOne({username: req.body.username})
      if(foundUser) {
        const isAMatch = bcrypt.compareSync(req.body.password, foundUser.password)
        if(isAMatch) {
          console.log('login successful')
          req.session.currentUser = foundUser
          res.redirect('/bucketlist')
        } else {
          res.status(500).send('Username or password does not match or does not exist.')
        }
      } else {
        res.status(500).send('Username or password does not match or does not exist.')
      }
    } catch (err) {
      console.log(err)
      res.status(500).send('Username or password does not match or does not exist.')
    }
  })

  router.delete('/logout', (req,res) => {
    req.session.destroy(err => {
        if(err) {
            console.log(err, " logout failed")
            res.status(500).res.send('Logout Failed, please try again')
        } else {
            res.redirect('/user/login')
        }
    })
  })

module.exports = router