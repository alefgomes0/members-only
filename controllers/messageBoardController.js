const User = require("../models/user");
const Message = require("../models/message");
const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
  const allMessages = await Message.find().populate("user").exec();
  let showMessageForm = true;

  function setShowForm() {
    showMessageForm = !showMessageForm
  }


  res.render("index", {
    title: "Members Only",
    messages: allMessages,
    showMessageForm: showMessageForm,
    setShowForm: setShowForm
  });
});
