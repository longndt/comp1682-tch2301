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
   res.send(categoryList);
});

module.exports = router;