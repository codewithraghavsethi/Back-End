const express = require("express");
const { body } = require("express-validator");
const { validationResult } = require("express-validator");
const router = express.Router();

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
  (req, res) => {
    const errors = validationResult(req);
    console.log(errors);
    res.send(errors);
  }
);

module.exports = router;
