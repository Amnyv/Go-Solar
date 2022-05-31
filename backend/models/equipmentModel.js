const mongoose = require("../connection");

const schema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  features: Array,
  price: Number,
  seller: { type: mongoose.Types.ObjectId, ref: "seller" },
  createdAt: Date,
});

const model = mongoose.model("equipment", schema);
module.exports = model;
