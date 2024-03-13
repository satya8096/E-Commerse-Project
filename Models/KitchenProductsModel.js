const mongoose = require("mongoose");

const KitchenSchema = new mongoose.Schema({
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
  filter: String,
});

const KitchenModel = mongoose.model("kitchenproducts", KitchenSchema);

module.exports = KitchenModel;
