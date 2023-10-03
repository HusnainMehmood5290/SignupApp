const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");

const login = async (req, res) => {
  try {
    const { email, pass } = req.body;
    const result = await userModel.findOne({ email });
    if (result) {
      console.log(pass);
      console.log(result.pass);
      const isValid = await bcrypt.compare(pass, result.pass);
      if (isValid) {
        console.log("valid");
        return res.send(result);
      }
    }
    res.send(false);
  } catch (error) {
    console.log(`Login Error: ${error.message}`);
  }
};

module.exports = login;
