const User = require("../models/user");
const Message = require("../models/message");
const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");


exports.get = (req, res, next) => {
  res.render("register", {
    title: "Create an account"
  })
}

exports.post = [
  body("first_name")
    .trim()
    .escape()
    .withMessage("First name must not be empty")
    .isLength({ min: 2, max: 40 })
]