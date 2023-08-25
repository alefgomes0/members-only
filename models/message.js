const mongoose = require("mongoose");
const Schema = mongoose.Schema

const MessageSchema = new Schema({
  title: { type: String, required: true, maxLength: 50 },
  body: { type: String, required: true, maxLength: 200 },
  author: { type: Schema.Types.ObjectId, required: true }
})

module.exports = mongoose.model("Message", MessageSchema);
