const User = require("../models/user");
const Message = require("../models/message");
const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");


exports.get = asyncHandler((req, res, next) => {
  res.render("signUp", {
    title: "Log in"
  })
})