// module javascript ES6
import express from "express";

// common javascript
// const express = require("express");
const app = express();
app.use(express.static("dist"));

const port = process.env.PORT ||  3000;

// app.get("/", (req, res) => {
//   res.send("Hello Raghav server is ready!");
// });

// get a list of jokes

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "joke one",
      content: "this is a joke one",
    },
    {
      id: 2,
      title: "joke two",
      content: "this is a joke two",
    },
    {
      id: 3,
      title: "joke three",
      content: "this is a joke three",
    },
    {
      id: 4,
      title: "joke four",
      content: "this is a joke four",
    },
    {
      id: 5,
      title: "joke fivth",
      content: "this is a joke fivth",
    },
  ];
  res.send(jokes);
});

app.listen(port, (req, res) => {
  console.log(`http://localhost:${port} engine start`);
});
