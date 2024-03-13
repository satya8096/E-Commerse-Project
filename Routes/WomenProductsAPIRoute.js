const express = require("express");
const router = express.Router();
const WomenProductModel = require('../Models/WomenProductsModel');

router.get("/shopykit/api/v1/women-products", async (req, res) => {
  const data = await WomenProductModel.find();
  res.status(200).json(data);
});
router.post("/shopykit/api/v1/women-products", async (req, res) => {
  const data = await WomenProductModel.create(req.body);
  res.status(200).json(data);
});

module.exports = router;
