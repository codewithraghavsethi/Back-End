const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index.ejs");
});

app.get("/profile/:username", function (req, res) {
  // res.send(req.params.username);
  res.send(`Welcome, ${req.params.username}`);
});

app.get("/profile/:username/:age", function (req, res) {
  // res.send(req.params.username);
  res.send(
    `Welcome, Mr. ${req.params.username} and your age is ${req.params.age}`
  );
});

app.listen(3000, function () {
  console.log("Its running");
});
