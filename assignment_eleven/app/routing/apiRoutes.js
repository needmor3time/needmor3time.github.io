var furryFriends = require("../data/friends.js");
module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(furryFriends);
    });

    app.post("/api/friends", function(req, res) {
        var newAdopter = req.body
        //console.log("request: ", req);
        var bestDog = {
            name: "",
            photo: "",
            bestScore: 50
        };
        for (var i=0; i < furryFriends.length; i++ ) {
            var currentDog = furryFriends[i];
            for(var j=0; j < currentDog.scores.length; j++) {
                var dogScore = currentDog.scores[j];
                dogScore Math.abs // <-- absolute value
            }
        }
        //
        console.log("new adopter info console", newAdopter);
    });
  }

  // take inputs from user

  // loop through object and compare. get absolute value of compare

  //write results of each compare to an array.

  //compare all the results, one with the lowest value is winner