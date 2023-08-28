const User = require("../models/user");
const Message = require("../models/message");
const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");

exports.get = (req, res, next) => {
  res.render("register", {
    title: "Create an account",
  });
};

exports.post = [
  body("first_name")
    .trim()
    .escape()
    .isLength({ min: 2, max: 40 })
    .withMessage("First name must not be empty"),
  body("last_name")
    .trim()
    .escape()
    .isLength({ min: 2, max: 40 })
    .withMessage("Last name must not be empty"),
  body("email")
    .trim()
    .escape()
    .isEmail()
    .isLength({ min: 5, max: 60 })
    .withMessage("Email must not be empty"),
  body("password")
    .trim()
    .escape()
    .isStrongPassword({
      minLength: 5,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })
    .withMessage(
      "Password must have at least: 5 characters, 1 lower case, 1 upper case, 1 number and 1 special symbol"
    ),
  body("confirmed_password")
    .trim()
    .escape(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    const emailAlreadyRegistered = await User.findOne({
      email: req.body.email,
    });
    const passwordMismatch = req.body.password !== req.body.confirmed_password;

    const user = new User({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 10),
      is_member: false,
      is_admin: false,
    });

    if (emailAlreadyRegistered) {
      res.render("register", {
        title: "Create an account",
        user: user,
        errorEmailTaken: "Email already registered",
      });
      return;
    }
    if (passwordMismatch) {
      res.render("register", {
        title: "Create an account",
        user: user,
        errorPasswordMismatch: "Passwords don't match",
      });
      return;
    }
    if (!errors.isEmpty()) {
      res.render("register", {
        title: "Create an account",
        user: user,
        errors: errors.array(),
      });
      return;
    } else {
      await user.save();
      res.redirect("/");
    }
  }),
];
