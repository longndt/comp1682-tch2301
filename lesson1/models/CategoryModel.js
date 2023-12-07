var mongoose = require('mongoose');
//Schema: Collection (Table) Structure
var CategorySchema = mongoose.Schema(
   {
      //field (column) : data type
      name: String,
      description: String,
      //popular data types: String, Number, Date, Boolean
   }
);
var CategoryModel = mongoose.model("category", CategorySchema, "category");
//Note: "category" is collection name
module.exports = CategoryModel;