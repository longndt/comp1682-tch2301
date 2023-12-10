var express = require('express')
var router = express.Router()
var UserModel = require('../models/UserModel');

//import bcryptjs package
var bcrypt = require('bcryptjs');
var salt = 8;       //set a random value

router.get('/register', (req, res) => {
   res.render('auth/register', { layout: 'empty_layout'})
})

router.post('/register', async (req, res) => {
   try {
      var pass = req.body.pw;
      var hash = bcrypt.hashSync(pass, salt);
      var user = {
         username: req.body.un,
         password: hash,
         role: "user"
      }
      await UserModel.create(user);
      console.log('add succeed')
   } catch (err) {
      console.log('add failed. ' + err)
   }
})

router.get('/login', (req, res) => {
   res.render('auth/login' , { layout: 'empty_layout'})
})

router.get('/welcome', (req, res) => {
   res.render('auth/welcome')
})

router.post('/login', async (req, res) => {
   var login = req.body;
   var user = await UserModel.findOne({ username: login.username })
   if (user) {
      var hash = bcrypt.compareSync(login.password, user.password)
      if (hash) {
         //res.send("<h1>login succeed</h1>")
         //initialize session after login success
         req.session.username = login.username

         res.render('auth/welcome');
      }
      else {
         //res.send("<h1>login failed</h1>")
         res.redirect('/auth/login');
      }
   }
});




module.exports = router