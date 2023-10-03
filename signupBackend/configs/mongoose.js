const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/ReactApp")
  .then(() => {
    console.log("mongoose Connection suceed");
  })
  .catch(() => {
    console.log("mongoose Connection failde");
  });
module.exports = mongoose;
