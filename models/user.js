const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  first_name: { type: String, required: true, minLength: 2, maxLength: 40 },
  last_name: { type: String, required: true, minLength: 2, maxLength: 40 },
  email: { type: String, required: true, minLength: 5, maxLength: 60 },
  password: { type: String, required: true, minLength: 5, maxLength: 130 },
  is_member: { type: Boolean, required: true },
  is_admin: { type: Boolean, required: true }
});

UserSchema.virtual("full_name").get(function () {
  return `${this.first_name} ${this.last_name}`;
});

module.exports = mongoose.model("User", UserSchema)
