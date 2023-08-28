const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { DateTime } = require("luxon")

const MessageSchema = new Schema({
  title: { type: String, required: true, maxLength: 50 },
  body: { type: String, required: true, maxLength: 200 },
  user: { type: Schema.Types.ObjectId, required: true, ref: "User" },
  date: { type: Date },
});

MessageSchema.virtual("date_formatted").get(function () {
  return `${this.date.toLocaleDateString(DateTime.DATE_SHORT)}`;
});

module.exports = mongoose.model("Message", MessageSchema);
