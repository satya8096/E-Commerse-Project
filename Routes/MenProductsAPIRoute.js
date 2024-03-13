const express = require('express');
const router = express.Router();
const MenProductModel = require('../Models/MenProductsModel');


router.get("/shopykit/api/v1/men-products", async (req,res)=>{
    const data = await MenProductModel.find()
    res.status(200).json(data)
});
router.post('/shopykit/api/v1/men-products',async (req,res)=>{
    const data = await MenProductModel.create(req.body);
    res.status(200).json(data)
})


module.exports = router;