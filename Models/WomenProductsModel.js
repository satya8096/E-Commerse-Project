const mongoose = require("mongoose");

const WomenSchema = new mongoose.Schema({
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

const WomenModel = mongoose.model("womenproducts", WomenSchema);

module.exports = WomenModel;
