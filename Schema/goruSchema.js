var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var goruSchema = new Schema({
  ownerName: { type: String, required: true },
  ownerId: { type: String, required: true },
  cowBreed: { type: String, required: true },
  sex: { type: String, required: true },
  size: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
});
const Goru = mongoose.model("goru", goruSchema);
module.exports = Goru;
