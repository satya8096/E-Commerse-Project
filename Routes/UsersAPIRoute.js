const express = require("express");
const router = express.Router();
const UserModel = require("../Models/UserModel");

router.get("/shopykit/api/v1/user-details", async (req, res) => {
  const data = await UserModel.find();
  res.status(200).json(data);
});
router.get("/shopykit/api/v1/user-details/:id", async (req, res) => {
  const id = req.params.id
  const data = await UserModel.findOne({id});
  res.status(200).json(data);
});
router.post("/shopykit/api/v1/user-details", async (req, res) => {
  const data = await UserModel.create(req.body);
  res.status(200).json(data);
});

router.patch("/shopykit/api/v1/user-details/:id", async (req,res)=>{
  const data = req.body.cart;
  console.log(data);
  const userId = req.body.userId;
  console.log(userId);
  // const user = UserModel.findOne()
})
module.exports = router;
