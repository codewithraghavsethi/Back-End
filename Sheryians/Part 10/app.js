const express = require("express");
const app = express();

const userModel = require("./usermodel");

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/create", async (req, res) => {
  let createduser = await userModel.create({
    name: "Raghav",
    username: "sethiji",
    email: "sethisahabraghav@gmail.com",
  });
  res.send(createduser);
});

app.get("/read", async (req, res)=>{
  let readuser = await userModel.find({name: "Raghav"})
  res.send(readuser);
})

app.get("/update", async (req, res) => {
  let updateduser = await userModel.findOneAndUpdate(
    { username: "sethiji" },
    { name: "Raghav Sethi Sahab" },
    { new: true }
  );
  res.send(updateduser);
});

app.get("/delete" , async (req, res)=>{
  let deleteuser = await userModel.findOneAndDelete({name: "Raghav"})
  res .send(deleteuser)
})
app.listen(3000);
