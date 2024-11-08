const express = require("express");
const app = express();
const userRouter = require("./routes/user.routes");
const { body, validationResult } = require('express-validator');



app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.use("/user", userRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
