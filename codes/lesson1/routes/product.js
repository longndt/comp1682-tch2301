var express = require('express');
var router = express.Router();
var ProductModel = require('../models/ProductModel');
var CategoryModel = require('../models/CategoryModel');

//feature: show all Product
//URL: localhost:3000/Product
//SQL: SELECT * FROM Product
//IMPORTANCE: must include "async" , "await"
router.get('/', async (req, res) => {
   //get data from collection
   var productList = await ProductModel.find({}).populate('category');
   //load data
   //res.send(ProductList);
   //File location: views/product/index.hbs
   res.render('product/index', { productList });
});

router.get('/add', async (req, res) => {
   var categoryList = await CategoryModel.find({});
   res.render('product/add', { categoryList});
})

router.post('/add', async (req, res) => {
   //get value from form : req.body
   var product = req.body;
   await ProductModel.create(product);
   res.redirect('/product');
})

module.exports = router;