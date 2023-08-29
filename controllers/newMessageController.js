const User = require("../models/user");
const Message = require("../models/message");
const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");


exports.get = (req, res, render) => {
  res.render("new-message", {
    title: "Send a new message"
  })
}

exports.post = [
  body("title")
    .trim()
    .escape()
    .isLength({ min: 1 })
    .withMessage("Title cannot be empty"),
  body("body")
    .trim()
    .escape()
    .isLength({ min: 1 })
    .withMessage("Message cannot be empty"),

  asyncHandler(async (req, res, next) => {
    //...
  })
]