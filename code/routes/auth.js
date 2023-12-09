var express = require('express')
var router = express.Router()

router.get('/register', (req, res) => {
   res.render('auth/register')
})



module.exports = router