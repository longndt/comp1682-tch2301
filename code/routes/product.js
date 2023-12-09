var express = require('express');
var router = express.Router();
var ProductModel = require('../models/ProductModel');
var CategoryModel = require('../models/CategoryModel');

router.get('/', async (req, res) => {
   var productList = await ProductModel.find({}).populate('category');
   res.render('product/index', { productList });
});

router.get('/add', async (req, res) => {
   var categoryList = await CategoryModel.find({});
   res.render('product/add', { categoryList });
})

router.post('/add', async (req, res) => {
   var product = req.body;
   await ProductModel.create(product);
   res.redirect('/product');
})

router.get('/edit/:id', async (req, res) => {
   var id = req.params.id;
   var product = await ProductModel.findById(id);
   res.render('product/edit', { product, layout: 'custom_layout' });
})

router.post('/edit/:id', async (req, res) => {
   var id = req.params.id;
   var data = req.body;
   await ProductModel.findByIdAndUpdate(id, data);
   res.redirect('/product');
})

router.get('/delete/:id', async (req, res) => {
   var id = req.params.id;
   await ProductModel.findByIdAndDelete(id);
   res.redirect('/product');
})

router.post('/search', async (req, res) => {
    var kw = req.body.keyword;
   var productList = await  ProductModel.find({ name: new RegExp(kw, "i") });
    res.render('product/index', { productList })
})

router.get('/sort/asc', async (req, res) => {
   var productList = await ProductModel.find().sort({ name: 1 });
   res.render('product/index', { productList })
})

router.get('/sort/desc', async (req, res) => {
   var productList = await ProductModel.find().sort({ name: -1 });
   res.render('product/index', { productList })
})

module.exports = router;