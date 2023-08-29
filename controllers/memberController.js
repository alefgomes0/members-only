const User = require("../models/user");
const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");

exports.get = (req, res, next) => {
  res.render("member", {
    title: "Become a member",
  });
};

exports.post = [
  body("question").trim().escape().toLowerCase(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    const rightAnswer =
      req.body.question === "cat" || req.body.question === "cats"
        ? true
        : false;

    if (req.user.is_member) {
      res.render("member", {
        title: "Become a member",
        error: "You're already a member!",
      });
    }

    if (!rightAnswer) {
      res.render("member", {
        title: "Become a member",
        error: "Wrong answer",
      });
    } else {
      const user = await User.findByIdAndUpdate(req.user._id, {
        is_member: true,
      });
      await user.save();
      res.redirect("/");
    }
  }),
];
