const User = require("../models/user");
const Message = require("../models/message");
const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");

exports.get = (req, res, next) => {
  res.render("login", {
    title: "Log in",
  });
};


