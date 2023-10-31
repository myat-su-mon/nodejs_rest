const User = require("../models/user");
const { validationResult } = require("express-validator");

exports.signup = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error("Validation Failed");
    error.statusCode = 422;
    error.data = errors.array();
    throw error;
  }
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  //   const user = new User({
  //     name: name,
  //     email: email,
  //     password: password,
  //   });

  //   user
  //     .save()
  //     .then((result) => {
  //       res.status(201).json({
  //         message: "User created",
  //         userId: result._id,
  //       });
  //     })
  //     .catch((err) => {
  //       if (!err.statusCode) {
  //         // if error doesn't have a status code, set one
  //         err.statusCode = 500;
  //       }
  //       next(err); // forward error request
  //     });
};
