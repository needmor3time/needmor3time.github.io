

var greekGods = ["zuess", "hades", "posiden", "hera", "aphrodite", "hermes", "athena", "aries", "apollo", "kronus"];

var hints = {
zuess : ["male", "oldest brother", "most powerful"],
hades : ["male", "big three", "underworld"],
poseiden : ["male", "big three", "water lover"],
hera : ["female", "amazon enforcer", "wife of the big guy"],
aphrodite : ["female", "fairest of the gods", "love not war"],
hermes : ["male", "messenger", "florist symbol with winged feet"],
athena : ["female", "warrior goddess", "patron of Athens"],
ares : ["male", "Zuess’s son", "war god"],
apollo : ["male", "Zuess’s son", "sun god"],
kronus : ["male", "titan", "killed by his sons"]
}

var wins = 0;
var losses = 0;
var numOfGuesses = 6;
//setting guessed letters and dashes arrays to empty
var guessedLetters = [];
var dashes = [];
//hang man pics in order
var hangManImages = ["./assets/images/Hangman-0.png", "./assets/images/Hangman-1.png", "./assets/images/Hangman-2.png", "./assets/images/Hangman-3.png", "./assets/images/Hangman-4.png", "./assets/images/Hangman-5.png", "./assets/images/Hangman-6.png"]

function resetGame () {
    numOfGuesses = 6;
    //empties guessed letters array and empties screen
    for (var h = guessedLetters.length; h > 0; h--) {
        guessedLetters.pop();
        console.log("letters in guessedLetters array left", guessedLetters[g]);
    };
    //empties guessed letters array and empties screen
    $("#display_guesses").html("<p></p>");
    for (var g = dashes.length; g > 0; g--) {
        dashes.pop();
        console.log("letters in dashes array left", dashes[g]);
    };
    $("#display_dashes").html("<p></p>");
    //reset hangman pic and messages to empty
    $("#hangmanPic").attr("src","./assets/images/Hangman-0.png");
    $("#messages").html("<p id = 'messagess'></p>");
    newGame();
};

function anotherRound () {
    console.log("Do you want to play another round?");
    $("#messages").html("<p id = 'messagess'>Do you want to play another round?</p>");
    setTimeout(resetGame, 3000);
};

function newGame () {
    $("#messages").html("<p id = 'messagess'>Press any key to begin guessing.</p>");
    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerChoice = greekGods[Math.floor(Math.random() * greekGods.length)];
    console.log(computerChoice);
    //create array for computer_choice
    var computer_choice = computerChoice.split("");
    //load dashes array with actual dashes
    for (var i = 0; i < computerChoice.length; i++) {
        dashes.push(" _ ");
        $("#display_dashes").append(" _ ");
    }

        /* button_press = start game loop */
        document.onkeyup = function (event) {
            var key_guess = event.key;


            //condition of picking the same letter more than once
            if (guessedLetters.indexOf(key_guess) > -1) {
                    //do nothing if already guessed letter
                    $("#messages").html("<p id = 'messagess'>You already guessed that letter.</p>");
                    console.log('already guessed');
                
            }
            // update window with key guess <-- due to array, it needs to start with 0, therefore the -1
            else if (computer_choice.indexOf(key_guess) > -1) {
                // update dashes with letter(s)
                console.log('correct guess');
                console.log(dashes);
                for (var i=0; i<computer_choice.length; i++) {
      
                    console.log("computer_choice.length", computer_choice.length);
                    if(computer_choice[i] == key_guess) {
                        console.log('computer choice: ', i);
                        dashes[i] = key_guess;
                        console.log("dashes", dashes.indexOf(" _ "));
                    }
                }
                // update guessedLetters array
                guessedLetters.push(event.key);
                console.log("correct guessedLetters", guessedLetters);
                $("#display_dashes").html(dashes);
                $("#display_guesses").append(event.key);
                //checks dashes array for dashes to see if they have guessed all letters correctly
                if (dashes.indexOf(" _ ") == -1)  {
                    console.log('game won');
                    $('#myModal').modal('show');
                    //if there are no dashes, increment wins
                    wins++;
                    $("#wins").html("<a id = 'wins'>Wins = "+ wins +"</a>");
                    //if wins = 6, end the game
                    if (wins == 6) {
                        $("#messages").html("<p id = 'messagess'>You know your Greek gods!</p>");
                        // end game
                        return;
                    }
                    //if wins don't equal 6, send message and continue
                    else {
                        $("#messages").html("<p id = 'messagess'>You won this round!</p>");
                        setTimeout(anotherRound, 3000);
                    }
                }
                
            }  
            //condition of incorrect new letter
            else if (computer_choice.indexOf(key_guess) == -1) {
                console.log('wrong guess');
                //update guessedLetters array
                guessedLetters.push(event.key);
                console.log("incorrect guessedLetters", guessedLetters);
                $("#display_guesses").append(event.key);
                //update numOfGuesses -1  embed if statement to check for numOfGuesses = 0
                numOfGuesses--;
                //update hangman progression linked to the number of guesses remaining and change image
                if (numOfGuesses == 5) {
                    $("#hangmanPic").attr("src","./assets/images/Hangman-1.png"); 
                    $(".num_guesses_left").html("<a>You have 5 guesses left</a>");

                }
                else if (numOfGuesses == 3) {
                    $("#hangmanPic").attr("src","./assets/images/Hangman-3.png");
                    $(".num_guesses_left").html("<a>You have 3 guesses left</a>");
                }
                //embedded if to control hint logic    
                else if (numOfGuesses == 0) {
                    losses++;
                    $("#hangmanPic").attr("src","./assets/images/Hangman-6.png");
                    $(".num_guesses_left").html("<a>You have 0 guesses left</a>");
                    $("#messages").html("<p id = 'messagess'>You lost this round!</p>");
                    setTimeout(anotherRound, 3000);
                }
                else if (numOfGuesses == 4) {
                    $("#hangmanPic").attr("src","./assets/images/Hangman-2.png");
                    $(".num_guesses_left").html("<a>You have 4 guesses left</a>");
                    console.log(hints[computerChoice][0]);
                    $("#messages").html("<p id = 'messagess'>Hint: " + hints[computerChoice][0] + "</p");
                    
                }
                else if (numOfGuesses == 2) {
                    $("#hangmanPic").attr("src","./assets/images/Hangman-4.png");
                    $(".num_guesses_left").html("<a>You have 2 guesses left</a>");
                    console.log(hints[computerChoice][1]);
                    $("#messages").html("<p id = 'messagess'>Hint: " + hints[computerChoice][1] + "</p");
                }
                else if (numOfGuesses == 1) {
                    $("#hangmanPic").attr("src","./assets/images/Hangman-5.png");
                    $(".num_guesses_left").html("<a>You have 1 guess left</a>");
                    console.log(hints[computerChoice][2]);
                    $("#messages").html("<p id = 'messagess'>Hint: " + hints[computerChoice][2] + "</p");
                }
            }
        }
};
newGame();