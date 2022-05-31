const mongoose = require("../connection");

const schema = new mongoose.Schema({
  name: String,
  qualification: String,
  occupation: String,
  experience: Number,
  mainareaofexperience: String,
  email: String,
  password: String,
  createAt: Date,
});

const model = mongoose.model("experts", schema);
module.exports = model;
