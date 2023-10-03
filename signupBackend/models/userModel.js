const mongoose = require("mongoose");

const signupSchema = mongoose.Schema({
  fname: { type: String, trim: true, required: true },
  lname: { type: String, trim: true, required: true },
  email: { type: String, trim: true, required: true },
  pass: { type: String, trim: true, required: true },
});

const signupModel = mongoose.model("signupModel", signupSchema);
module.exports = signupModel;
