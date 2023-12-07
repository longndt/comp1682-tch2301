var mongoose = require('mongoose');
var ProductSchema = mongoose.Schema(
   {
      name: {
         type: String
      },
      price: Number,
      image: String,
      category: {  //"category" : name of referenced field (FK)
         type: mongoose.SchemaTypes.ObjectId,
         ref: 'category'  //"category" : name of referenced collection
      }
   }
)
var ProductModel = mongoose.model("san pham", ProductSchema, "product");
module.exports = ProductModel;