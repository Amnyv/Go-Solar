const mongoose = require("mongoose");
const url =
  "mongodb+srv://nikhil:root@cluster0.9odug.mongodb.net/mygosolar?retryWrites=true&w=majority";
// "mongodb+srv://mmm:mmm@cluster0.gvyon.mongodb.net/go-solar?retryWrites=true&w=majority";
// "mongodb+srv://Janhavis830:madan2830@mystorage.pxblk.mongodb.net/go-solar?retryWrites=true&w=majority";

mongoose
  .connect(url)
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = mongoose;
