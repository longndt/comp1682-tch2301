var express = require('express');
var router = express.Router();
const ProductModel = require('../models/ProductModel');

//URL: localhost:3000/api
router.get('/', async (req, res) => {
   try {
      var products = await ProductModel.find({});
      //console.log(products);
      res.status(200).json(products); //200: OK
   } catch (err) {
      //console.error(err);
      res.status(400).send('Load data failed ! ' + err); //400: ERROR
   }
})

//URL: localhost:3000/api/id
router.get('/:id', async (req, res) => {
   try {
      var product = await ProductModel.findById(req.params.id);
      res.status(200).json(product);
   } catch (err) {
      res.status(400).send('Load data failed ! ' + err);
   }
})

router.delete('/delete/:id', async (req, res) => {
   try {
      var id = req.params.id;
      var product = await ProductModel.findById(id);
      if (product) {
         await ProductModel.deleteOne(product);
         res.status(200).send('Delete product succeed !');
      } else {
         res.send('Product not found !');
      }
   } catch (err) {
      res.status(400).send('Delete product failed ! ' + err);
   }
})

router.post('/add', async (req, res) => {
   var product = req.body;
   await ProductModel.create(product);
   res.status(201).json(product);
   // res.status(201).send('Add product succeed !');  //201: CREATED
})

router.put('/edit/:id', async (req, res) => {
   await ProductModel.findByIdAndUpdate(req.params.id, req.body);
   res.status(200).send('Edit product succeed !');
})

module.exports = router;