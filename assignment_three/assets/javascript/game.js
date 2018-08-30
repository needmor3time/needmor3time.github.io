

var greekGods = ["zuess", "hades", "posiden", "hera", "aphrodite", "hermes", "athena", "aries", "apollo", "kronus"];

var hints = {
zuess : ["male", "oldest brother", "most powerful"],
hades : ["male", "big three", "underworld"],
posiden : ["male", "big three", "water lover"],
hera : ["female", "amazon enforcer", "wife of the big guy"],
aphrodite : ["female", "fairest of the gods", "love not war"],
hermes : ["male", "messenger", "florist symbol with winged feet"],
athena : ["female", "warrior goddess", "patron of Athens"],
aries : ["male", "Zuess’s son", "war god"],
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

// Randomly chooses a choice from the options array. This is the Computer's guess.
var computerChoice = greekGods[Math.floor(Math.random() * greekGods.length)];
console.log(computerChoice);
//create array for computer_choice
var computer_choice = computerChoice.split("");
//load dashes array with actual dashes
for (var i = 0; i < computerChoice.length; i++) {
    dashes.push(" "+"_"+" ");
}

/* button_press = start game loop */
document.onkeyup = function (event) {
    var key_guess = event.key;





    // update window with key guess <-- due to array, it needs to start with 0, therefore the -1
    if (computer_choice.indexOf(key_guess) > -1) {
        // update dashes with letter(s)
        console.log('correct guess');
        console.log(dashes);
        for (var i=0; i<computer_choice.length; i++) {
            // console.log('computer choice: ' + computer_choice[i]);
            // console.log('user choice: ' + key_guess);
            if(computer_choice[i] == key_guess) {
                dashes[i] = key_guess;
            }
        }
        // update guessedLetters array
        guessedLetters.push(event.key);
        console.log("correct guessedLetters", guessedLetters);
        $(".display_guesses").html(dashes);
        //checks dashes array for dashes to see if they have guessed all letters correctly
        if (dashes.indexOf("_") == -1)  {
            console.log('game won');
            //if there are no dashes, increment wins
            wins++;
            $("#wins").html("<a id = 'wins'>Wins = "+ wins +"</a>");
            //if wins = 6, end the game
            if (wins == 6) {
                alert("You know your Greek gods!");
                // reset game
                return;
            }
            //if wins don't equal 6, send message and continue
            else {
                //document.getElemnetById("wins").innerHTML("You won this round!")
                alert("You won this round!");
            }
        }
        //condition of picking the same letter more than once
    } else if (guessedLetters.indexOf(key_guess) > -1) {
        //do nothing if already guessed letter
        alert("You already guessed that letter.");
        console.log('already guessed');
    }
    //condition of incorrect new letter
    else if (computer_choice.indexOf(key_guess) == -1) {
        console.log('wrong guess');
        //update guessedLetters array
        guessedLetters.push(event.key);
        console.log("incorrect guessedLetters", guessedLetters);
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
        if (numOfGuesses == 0) {
            losses++;
            $("#hangmanPic").attr("src","./assets/images/Hangman-6.png");
            $(".num_guesses_left").html("<a>You have 0 guesses left</a>");
            alert("You lost this round!");
        }
        else if (numOfGuesses == 4) {
            $("#hangmanPic").attr("src","./assets/images/Hangman-2.png");
            $(".num_guesses_left").html("<a>You have 4 guesses left</a>");
            console.log(hints[computerChoice][0]);
            alert(hints[computerChoice][0]);
            
        }
        else if (numOfGuesses == 2) {
            $("#hangmanPic").attr("src","./assets/images/Hangman-4.png");
            $(".num_guesses_left").html("<a>You have 2 guesses left</a>");
            console.log(hints[computerChoice][1]);
            alert(hints[computerChoice][1]);
        }
        else if (numOfGuesses == 1) {
            $("#hangmanPic").attr("src","./assets/images/Hangman-5.png");
            $(".num_guesses_left").html("<a>You have 1 guess left</a>");
            console.log(hints[computerChoice][2]);
            alert(hints[computerChoice][2]);
        }
    }






}
