const mongoose = require("mongoose");

const userShema = new mongoose.Schema({
  // username: String,
  // email: String,
  // password: String,

  username: {
    type: String,
    require: true,
    trim: true,
    lowercase: true,
    unique: true,
    minlength: [3, "User name must be at least 3 characters long"],
  },

  email: {
    type: String,
    require: true,
    trim: true,
    lowercase: true,
    unique: true,
    minlength: [13, "Email must be at least 13 characters long"],
  },

  password: {
    type: String,
    require: true,
    trim: true,
    minlength: [5, "Password must be at least 5 characters long"],
  },
});


const user = mongoose.model("user", userShema);
module.exports = user