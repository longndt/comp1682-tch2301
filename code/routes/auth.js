var express = require('express')
var router = express.Router()
var UserModel = require('../models/UserModel');

//import bcryptjs package
var bcrypt = require('bcryptjs');
var salt = 8;       //set a random value

router.get('/register', (req, res) => {
   res.render('auth/register', { layout: 'auth_layout'})
})

router.post('/register', async (req, res) => {
   try {
      var pass = req.body.password;
      var hash = bcrypt.hashSync(pass, salt);
      var user = {
         username: req.body.username,
         password: hash
      }
      await UserModel.create(user);
      res.redirect('/auth/login')
   } catch (err) {
      console.log(err)
   }
})

router.get('/login', (req, res) => {
   res.render('auth/login' , { layout: 'auth_layout'})
})

router.post('/login', async (req, res) => {
   var login = req.body;
   var user = await UserModel.findOne({ username: login.username })
   if (user) {
      var hash = bcrypt.compareSync(login.password, user.password)
      if (hash) {
         //initialize session after login success
         req.session.user = user
         req.session.username = user.username
         res.redirect('/');
      }
      else {
         res.redirect('/auth/login');
      }
   }
});

router.get('/logout', (req, res) => {
   req.session.destroy();
   res.redirect("/auth/login");
})

module.exports = router