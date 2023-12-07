var mongoose = require('mongoose');
var ProductSchema = mongoose.Schema(
   {
      name: {
         type: String,
         minLength: [3, "Product name can not be smaller than 3 chracters"],
         maxLength: 30
      },
      price: Number,
      image: String,
      category: {  //"category" : name of referenced field (FK)
         type: mongoose.SchemaTypes.ObjectId,
         ref: 'category'  //"category" : name of referenced collection
      }
   }
)
var ProductModel = mongoose.model("product", ProductSchema, "product");
module.exports = ProductModel;