const User = require("../models/user");
const Message = require("../models/message");
const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");


exports.sign_up_get = asyncHandler((req, res, next) => {
  //...
}