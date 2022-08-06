const router = require("express").Router();
const mongoose = require("mongoose");
const User = require("../../models/User");
const bcrypt = require("bcrypt");

// -------------------- CREATE NEW USER -------------------- //
router.post("/signup", (req, res, next) => {
  // checks to see if user's email already exist 
  User.find({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user.length >= 1) {
        return res.status(409).json({
          message: "Email already exists!",
        });
      } else {
        // if does not exist, hash the password and adds to new User
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({ error: err });
          } else {
            const user = new User({
              _id: new mongoose.Types.ObjectId(),
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              userName: req.body.userName,
              email: req.body.email,
              password: hash,
              phoneNumber: req.body.phoneNumber
            });
            user
              .save()
              .then((result) => {
                console.log(result);
                res.status(201).json({
                  message: "User created",
                });
              })
              .catch((err) => {
                console.log(err);
                res.status(500).json({
                  error: err,
                });
              });
          }
        });
      }
    });
});


module.exports = router;
