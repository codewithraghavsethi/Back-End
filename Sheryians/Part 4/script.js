const express = require("express");
const app = express();

app.use( function(req, res, next){
  console.log("middleware challa");
  next();
});
app.use( function(req, res, next){
  console.log("middleware challa 2");
  next();
});
app.use( function(req, res, next){
  console.log("middleware challa 3");
  next();
});

app.get("/", function(req, res){
  res.send("Hello World! Raghav Sethi");
});

app.get("/about", function(req, res){
  res.send("About Page Hai Ye");
});

app.listen(3000);
