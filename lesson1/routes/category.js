var express = require('express');
var router = express.Router();
var CategoryModel = require('../models/CategoryModel');

//feature: show all category
//URL: localhost:3000/category
//SQL: SELECT * FROM category
//IMPORTANCE: must include "async" , "await"
router.get('/', async (req, res) => {
   //get data from collection
   var categoryList = await CategoryModel.find({});
   //load data
   res.render('category/index', { categoryList });
});

//SQL: DELETE FROM category WHERE _id = 'id'
router.get('/delete/:id', async (req, res) => {
   await CategoryModel.findByIdAndDelete(req.params.id);
   res.redirect('/category');
})

module.exports = router;