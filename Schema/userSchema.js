var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    createIndexes: { unique: true },
  },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now },
  sex: { type: String, required: true },
});
const User = mongoose.model("User", userSchema);
module.exports = User;
