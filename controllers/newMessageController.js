const User = require("../models/user");
const Message = require("../models/message");
const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");

exports.get = (req, res, render) => {
  res.render("new-message", {
    title: "Send a new message",
  });
};

exports.post = [
  body("header")
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
    const errors = validationResult(req);

    const message = new Message({
      title: req.body.header,
      body: req.body.body,
      user: req.user,
      date: new Date(),
    });

    if (!errors.isEmpty()) {
      res.render("new-message", {
        title: "Send a new message",
        header: req.body.header,
        body: req.body.body,
        errors: errors.array(),
      });
    } else {
      await message.save();
      res.redirect("/");
    }
  }),
];
