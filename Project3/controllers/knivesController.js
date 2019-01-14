const db = require("../models");

// Defining methods for the knivesController
module.exports = {
  findAll: function(req, res) {
    db.Knife
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Knife
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("req.body", req.body);

    //create object
    const knifeAnswer = {
      purpose: req.body["1"],
      steel: req.body["2"],
      handleMaterial: req.body["3"],
      tang: req.body["4"],
      guard: req.body["5"],
      pommel: req.body["6"],
      rivet: req.body["7"],
      lanyard: req.body["8"],
      fileorengrave: req.body["9"],
      finish: req.body["10"],
      special: req.body["11"]
    };
    console.log("knifeAnswer: ", knifeAnswer);
    db.Knife
      .create(knifeAnswer)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Knife
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Knife
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
