const express = require("express");
const signupController = require("../controllers/signupController");
const login = require("../controllers/loginController");
const route = express.Router();

route.post("/signup", signupController.addUser);
route.post("/login", login);
route.post("/findEmail", signupController.findEmail);

route.post("/update", signupController.updatePass);

module.exports = route;
