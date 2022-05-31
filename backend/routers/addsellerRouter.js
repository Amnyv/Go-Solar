// importing express
const express = require("express");
const Model = require("../models/addsellermodel");
const router = express.Router();

router.post("/add", (req, res) => {
  console.log(req.body);
  // for storing data in database
  new Model(req.body)
    .save()
    .then((data) => {
      console.log("user saved!");
      res.json({ message: "success" });
    })
    .catch((err) => {
      console.error(err);
      res.status(200).json(err);
    });
});

router.get('/getall', (req, res) => {
  Model.find({})
  .then((data) => {
    console.log('data fetched from user');
    res.status(200).json(data);
  }).catch((err) => {
    console.error(err);
    res.status(500).json(err);
  });
})

router.post('/authentication' , (req ,res) => {
  const formdata = req.body;
  Model.findOne({email : formdata.email , password : formdata.password})
    .then((data) => {
      console.log("data saved");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

module.exports = router;