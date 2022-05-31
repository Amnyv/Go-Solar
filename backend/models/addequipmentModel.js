const mongoose = require('../connection');
const Schema = mongoose.Schema;

const schema = new Schema({
    title: String,
    description: String,
    features: String,
    createdAt: Date,
})
const model = mongoose.model('addequip', schema);
module.exports = model;