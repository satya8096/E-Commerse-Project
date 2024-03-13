const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const dotenv = require("dotenv");
dotenv.config({ path: "config.env" });
app.use(express.urlencoded({ extended: true }));
const bcrypt = require("bcryptjs");
// const MenProductsAPI = require("./Routes/MenProductsAPIRoute");
// const WomenProductsAPI = require("./Routes/WomenProductsAPIRoute");
// const KidsProductsAPI = require("./Routes/KidsProductsRoute");
// const KitchenProductsAPI = require("./Routes/KitchenProductsAPIRoute");
const UserRouteAPI = require("./Routes/UsersAPIRoute");
const LoginModel = require("./Models/UserModel");
const ProductModelApI = require('./Routes/ProductRoute');


app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await LoginModel.findOne({ email });
  if (!user) return res.send({ result: "No data found" });
  const isTrue = await bcrypt.compare(password, user.password);
  if (isTrue) {
    // console.log(user);
    res.send({
      result: "success",
    });
  }
  else{
    res.send({
      result:"Failed"
    })
  }
});

// app.use("/", MenProductsAPI);
app.use("/", ProductModelApI);
// app.use("/", WomenProductsAPI);
// app.use("/", KidsProductsAPI);
// app.use("/", KitchenProductsAPI);
app.use("/", UserRouteAPI);

module.exports = app;
