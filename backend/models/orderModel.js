const mongoose = require("../connection");

const schema = new mongoose.Schema({
  orderedBy: { type: mongoose.Types.ObjectId, ref: "users" },
  product: { type: mongoose.Types.ObjectId, ref: "equipment" },
  createdAt: { type: Date, default: new Date() },
});

const model = mongoose.model("order", schema);
module.exports = model;
