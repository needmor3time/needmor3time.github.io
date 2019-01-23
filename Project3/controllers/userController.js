const db = require("../models");

// Defining methods for the userController
module.exports = {
  findOne: function(req, res) {
    console.log("find one function hit", req.query.username);
    db.User
      .findOne({username: req.query.username}, function(err, user) {
        if (err || !user) {
          console.log("401 logic hit");
          res
          .status(401)
          .json({message: "There was an error finding your account"});
          return;
        }
        if (!user.comparePassword(req.query.password, function(err, isMatch){
          if (err) {
            console.log("403 logic hit");
            res
            .status(403)
            .json({message: "the userid password combo was incorrect."});
          } else {
            console.log("successful login");
            return user;
          }
        }));
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
//   findById: function(req, res) {
//     db.Book
//       .findById(req.params.id)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
  create: function(req, res) {
    console.log("create function hit");
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    console.log("Update function hit");
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
