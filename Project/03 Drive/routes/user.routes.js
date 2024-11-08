const express = require("express");
const { body } = require("express-validator");
const { validationResult } = require("express-validator");
const router = express.Router();
const userModel = require("../models/user.model");
const bcrypt = require("bcrypt")

// router.get("/test", (req, res) => {
//   res.send("User test Route");
// });

router.get("/register", (req, res) => {
  res.render("register");
});

router.post(
  "/register",
  body("username").trim().isLength({ min: 5 }),
  body("email").trim().isEmail(),
  body("password").trim().isLength({ min: 4 }),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        massage: "Invalid Data",
      });
    }

    const { email, username, password } = req.body;
    const newUser = await userModel.create({
      username,
      email,
      password,
    });

    res.json(newUser);
  }
);

module.exports = router;
