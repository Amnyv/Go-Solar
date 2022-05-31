const mongoose = require("../connection");

const schema = new mongoose.Schema({
  email: String,
  password: String,
  username: String,
  age: Number,
  reviews: Array,
  rating: Array,
  products: Array,
  avatar: String,
  createdAt: { type: Date, default: new Date() },
});

const model = mongoose.model("seller", schema);
module.exports = model;
