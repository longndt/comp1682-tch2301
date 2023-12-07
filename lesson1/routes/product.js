var express = require('express');
var router = express.Router();
var ProductModel = require('../models/ProductModel');

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

module.exports = router;