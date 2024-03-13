const express = require("express");
const router = express.Router();
const KidsProductModel = require("../Models/KidsProductsModel");

router.get("/shopykit/api/v1/kids-products", async (req, res) => {
  const data = await KidsProductModel.find();
  res.status(200).json(data);
});
router.post("/shopykit/api/v1/kids-products", async (req, res) => {
  const data = await KidsProductModel.create(req.body);
  res.status(200).json(data);
});

module.exports = router;
