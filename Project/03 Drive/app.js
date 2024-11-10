const express = require("express");
const app = express();
const userRouter = require("./routes/user.routes");
const { body, validationResult } = require("express-validator");
const dotenv = require("dotenv")
const connectToDb = require("./config/db");
const cookieParser = require("cookie-parser")
const indexRouter = require("./routes/index.routes")

dotenv.config();

connectToDb();

app.set("view engine", "ejs");
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});


app.use("/", indexRouter);
app.use("/user", userRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
