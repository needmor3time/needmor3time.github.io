$(document).ready(function() {

    // 
    var yourNum = 0;
  
    // Generates the random "target number" we will try to reach.
    var numToGuess = randomNum();
    var wins = 0;
    var losses = 0;
    var crystals;
  
    // randomly generates a number between 1 and 12 then assigns it to a cystal.
    function numToCrystals() {
      // Crystals object.
      return {
        clear: {
          points: Math.floor(Math.random() * 12) + 1,
          imageUrl: "assets/images/clear.png"
        },
        blue: {
          points: Math.floor(Math.random() * 12) + 1,
          imageUrl: "assets/images/blue.png"
        },
        red: {
          points: Math.floor(Math.random() * 12) + 1,
          imageUrl: "assets/images/red.png"
        },
        black: {
          points: Math.floor(Math.random() * 12) + 1,
          imageUrl: "assets/images/black.png"
        }
      };
    }
  
    //Generates a number between 19 and 120.
    function randomNum() {
      return Math.floor(Math.random() * 120) + 19;
    }
  
    // Function that resets the game.
    function resetGame() {
      yourNum = 0;
      crystals = numToCrystals();
      numToGuess = randomNum();
      $("#random-area").text(numToGuess);
      $("#win-area").empty();
    }
  
    // Function that handles updating the page.
    function createBoard() {
      $("#win-area").empty();
  
      // Building our win/loss display and appending it to the page.
      var wSpan = $("<span>").text(wins);
      var lSpan = $("<span>").text(losses);
  
      var pWins = $("<p>").text("Wins: ");
      var pLosses = $("<p>").text("Losses: ");
  
      pWins.append(wSpan);
      pLosses.append(lSpan);
  
      $("#win-area").append(pWins);
      $("#win-area").append(pLosses);
    }
  
    // Function to render our crystals to the page.
    function renderCrystals() {
      for (var key in crystals) {
        var crystalDiv = $("<div class='crystals-button' data-name='" + key + "'>");
        var crystalImg = $("<img alt='image' class='crystal-img'>").attr("src", crystals[key].imageUrl);
        crystalDiv.append(crystalImg);
        $("#crystal-area").append(crystalDiv);
      }
    }
  
    // Function to update our "current guess" number. We are passing in the crystal that was clicked as an argument.
    function updateMatchingNumber(crystal) {
      console.log(crystals[crystal.attr("data-name")].points);
      // Update our "current guess" number based on which crystal was clicked.
      yourNum += crystals[crystal.attr("data-name")].points;
    }
  
    // Function that will render your "current guess" number to the page.
    function renderMatchingNumber() {
      //inline varaiable to house div
      var scoreNumDiv = $("<div id='score-number'>").text(yourNum);
      $("#score-area").html();
      $("#score-area").html(scoreNumDiv);
    }
  
    
  
    // Here we create an on.click event for the crystals.
    $(".crystals-button").on("click", function(event) {
      console.log("button click");
      // Update our "current guess" number and re-render it.
      updateMatchingNumber($(this));
      renderMatchingNumber();
  
      // Check to see if we have won or lost.
      // If our current guess number equals the target number..
      if (yourNum === numToGuess) {
        //Post win message
        $("#win-area").append($("<p>").text("You won!"));
        //Increment wins
        wins++;
        //callback to reset game
        resetGame();
      }
      // If your number is too high
      else if (yourNum > numToGuess) {
        //Post loss message
        $("#win-area").append($("<p>").text("You lost!"));
        //Increment losses
        losses++;
        //callback to reset game
        resetGame();
      }
    });


  //Functions call
    resetGame();
    createBoard();
    renderCrystals();
    renderMatchingNumber();


  });
  