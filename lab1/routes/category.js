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
   //get value from URL : req.params
   var id = req.params.id;
   await CategoryModel.findByIdAndDelete(req.params.id);
   res.redirect('/category');
})

router.get('/add', (req, res) => {
   res.render('category/add');
})

router.post('/add', async (req, res) => {
   //get value from form : req.body
   var category = req.body;
   await CategoryModel.create(category);
   res.redirect('/category');
})

router.get('/edit/:id', async (req, res) => {
   var id = req.params.id;
   var category = await CategoryModel.findById(id);
   res.render('category/edit', { category });
})

router.post('/edit/:id', async (req, res) => {
   var id = req.params.id;
   var data = req.body;
   await CategoryModel.findByIdAndUpdate(id, data);
   res.redirect('/category');
})

module.exports = router;