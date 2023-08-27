const mongoose = require("mongoose");
const Schema = mongoose.Schema

const MessageSchema = new Schema({
  title: { type: String, required: true, maxLength: 50 },
  body: { type: String, required: true, maxLength: 200 },
  user: { type: Schema.Types.ObjectId, required: true, ref: "User" }
})

module.exports = mongoose.model("Message", MessageSchema);
