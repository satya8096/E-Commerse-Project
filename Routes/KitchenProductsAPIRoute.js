const express = require("express");
const router = express.Router();
const KitchenProductModel = require("../Models/KitchenProductsModel");

router.get("/shopykit/api/v1/kitchen-products", async (req, res) => {
  const data = await KitchenProductModel.find();
  res.status(200).json(data);
});
router.post("/shopykit/api/v1/kitchen-products", async (req, res) => {
  const data = await KitchenProductModel.create(req.body);
  res.status(200).json(data);
});

module.exports = router;
