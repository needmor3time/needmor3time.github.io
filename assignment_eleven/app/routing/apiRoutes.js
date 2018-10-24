var friends = require("../data/friends.js");
module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {

    });
  }

  // take inputs from user

  // loop through object and compare. get absolute value of compare

  //write results of each compare to an array.

  //compare all the results, one with the lowest value is winner