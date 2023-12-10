var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', { layout: 'home_layout'});
});

module.exports = router;
