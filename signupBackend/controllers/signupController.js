const sendMail = require("../configs/nodeMailer");
const signupModel = require("../models/userModel");
const bcrypt = require("bcryptjs");

const signupController = {
  addUser: async (req, res) => {
    try {
      let { fname, lname, email, pass } = req.body;
      const isUnique = await signupModel.findOne({ email });
      if (!isUnique) {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(pass, salt);
        pass = hash;
        const result = new signupModel({ fname, lname, email, pass });
        await result.save();
        sendMail(email);
        // console.log("new");
        res.send("new");
      } else {
        // console.log("exist");
        res.send("exist");
      }
    } catch (error) {
      console.log(`AddUser ERROR: ${error.message}`);
    }
  },
  findEmail: async (req, res) => {
    try {
      let { email } = req.body;
      const isValid = await signupModel.findOne({ email });
      // console.log(email);
      if (isValid) {
        res.send("valid");
      } else {
        res.send("inValid");
      }
    } catch (error) {
      console.log(`findEmail ERROR: ${error.message}`);
    }
  },
  updatePass: async (req, res) => {
    try {
      let { email, pass } = req.body;
      console.log(email, pass);
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(pass, salt);
      pass = hash;
      const result = await signupModel.findOneAndUpdate({
        email,
        pass,
      });
      if (result) {
        console.log(result);

        res.send("done");
      } else {
        console.log("fail");
      }
    } catch (error) {
      console.log(`UpdatePass ERROR: ${error}`);
    }
  },
};

module.exports = signupController;
