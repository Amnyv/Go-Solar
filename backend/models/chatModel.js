const mongoose = require('../connection');

const schema = new mongoose.Schema({
    content : Object,
    sentBy: {type : mongoose.Types.ObjectId,ref: "users"},
    createdAt : { type : Date , default : new Date()}
});

 const model = mongoose.model("chats", schema);
 module.exports = model;