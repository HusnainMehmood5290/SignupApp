const express = require("express");
require("./configs/mongoose");
const app = express();
const route = require("./routes/routes");

app.use(express.json());
app.use("/", route);
app.listen(3000, "0.0.0.0", () => {
  console.log("server running at : http://192.168.0.116:3000/");
});
