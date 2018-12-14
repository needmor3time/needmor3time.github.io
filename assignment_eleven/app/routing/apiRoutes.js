var furryFriends = require("../data/friends.js");
var adopters = require("../data/adopters.js"); // <--add file for people adopting
module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(furryFriends);
  });
  app.get("/api/adopters", function(req, res) {
    res.json(adopters);
  });

  app.post("/api/friends", function(req, res) {
    var newAdopter = req.body;
    var adopterScore = newAdopter.scores;
    console.log("adopterScore: ", adopterScore);
    console.log("newAdopter: ", newAdopter);
    var bestDog = {
      name: "",
      photo: "",
      link: "",
      bestScore: 50
    };
    for (var i = 0; i < furryFriends.length; i++) {
      var abDifference = 0;
      var currentDog = furryFriends[i];
      console.log(`Current dog - ${currentDog.name}`);
      for (var j = 0; j < currentDog.scores.length; j++) {
        var dogScore = currentDog.scores[j];

        abDifference += Math.abs(
          parseInt(adopterScore[j]) - parseInt(dogScore)
        );
        console.log("absolute difference", abDifference);
      }
      if (abDifference <= bestDog.bestScore) {
        bestDog.name = currentDog.name;
        bestDog.photo = currentDog.photo;
        bestDog.link = currentDog.link;
        bestDog.bestScore = abDifference;
      }
    }
    //
    console.log("bestDog", bestDog);
    res.json(bestDog);
  });
};

// take inputs from user

// loop through object and compare. get absolute value of compare

//write results of each compare to an array.

//compare all the results, one with the lowest value is winner