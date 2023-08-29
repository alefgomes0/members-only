const User = require("../models/user");
const Message = require("../models/message");
const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
  const allMessages = await Message.find().populate("user").exec();

  res.render("index", {
    title: "Members Only",
    messages: allMessages,
  });
});

exports.delete = asyncHandler(async (req, res, next) => {
  const message = await Message.findById(req.params.id)
  await Message.findOneAndRemove(message)
  res.redirect("/")
})