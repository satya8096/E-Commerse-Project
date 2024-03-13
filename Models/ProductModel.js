const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
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
  questions: Array,
  type: String,
  deliverydate: Number,
  deliverycost: String,
  filter: String,
});

const ProductModel = mongoose.model("ShopykitProducts", ProductSchema);

module.exports = ProductModel;
