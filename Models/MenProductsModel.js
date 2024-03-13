const mongoose = require('mongoose');

const MenSchema = new mongoose.Schema({
  name: String,
  longName: String,
  salePrice: String,
  imgURL: String,
  specifications: Array,
  maxPrice: String,
  emi: String,
  description: String,
  rating: String,
  reviews: String,
  filter:String
});

const ProductModel = mongoose.model('MenProducts',MenSchema);

module.exports = ProductModel;