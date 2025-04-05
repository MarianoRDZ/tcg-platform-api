const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  name: String,
  game: String,
  edition: String,
  rarity: String,
  condition: String,
  language: String,
  price: Number,
  imageUrl: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Card", cardSchema);
