var express = require('express');
var router = express.Router();
const { checkLoginSession, checkAdminSession }  = require('../middlewares/auth');

router.get('/', checkLoginSession, function (req, res) {
  res.render('index', { layout: 'home_layout' });
});

router.get('/admin', checkAdminSession,(req, res) => {
  res.render('admin');
})

// router.get('/user', (req, res) => {
//   res.render('user', { layout : 'user_layout'})
// })

module.exports = router;
