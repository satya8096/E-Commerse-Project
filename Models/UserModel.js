const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');



const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: [true, "Name is Required Field !"],
  },
  email: {
    type: String,
    // unique: true,
    // required: [true, "Email is Required Field !"],
  },

  password: {
    type: String,
    // required: [true, "Password is Required Field !"],
  },
  confirmPassword: {
    type: String,
    // required: [true, "Confirm Password is Required Field !"],
  }
});

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);
  this.confirmPassword = undefined;
  next();
});

const UserModel = mongoose.model('usersDetails',UserSchema)

module.exports = UserModel;