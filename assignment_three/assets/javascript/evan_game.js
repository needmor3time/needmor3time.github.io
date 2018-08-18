var greekGods = ["zuess", "hades", "posiden", "hera", "aphrodite", "hermes", "athena", "aries", "apollo", "kronus"];
var hints = {
Zuess : ["male", "oldest brother", "most powerful"],
Hades : ["male", "big three", "underworld"],
Posiden : ["male", "big three", "water lover"],
Hera : ["female", "amazon enforcer", "wife of the big guy"],
Aphrodite : ["female", "fairest of the gods", "love not war"],
Hermes : ["male", "messenger", "florist symbol with winged feet"],
Athena : ["female", "warrior goddess", "patron of Athens"],
Aries : ["male", "Zuess’s son", "war god"],
Apollo : ["male", "Zuess’s son", "sun god"],
Kronus : ["male", "titan", "killed by his sons"]
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
    dashes.push("_");
}
/* button_press = start game loop */
document.onkeyup = function (event) {
    var key_guess = event.key;
    // update window with key guess <-- due to array, it needs to start with 0, therefore the -1
    if (computer_choice.indexOf(key_guess) > -1) {
        console.log('correct guess');
        console.log(dashes);
        for (var i=0; i<computer_choice.length; i++) {
            // console.log('computer choice: ' + computer_choice[i]);
            // console.log('user choice: ' + key_guess);
            if(computer_choice[i] === key_guess) {
                dashes[i] = key_guess;
            }
        }
        // update dashes with letter(s)
        // var j = 0;
        // j = computer_choice.indexOf(key_guess);
        //update matching dash index with letter
        // dashes[j] = key_guess;
        // update guessedLetters array
        guessedLetters.push(event.key);
        //checks dashes array for dashes to see if they have guessed all letters correctly
        if (dashes.indexOf("_") == -1)  {
            console.log('game won');
            //if there are no dashes, increment wins
            wins++;
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
    else if (computer_choice.indexOf(key_guess) === -1) {
        console.log('wrong guess');
        //update guessedLetters array
        guessedLetters.push(event.key);
        //update numOfGuesses -1  embed if statement to check for numOfGuesses = 0
        numOfGuesses--;
        //update hangman progression linked to the number of guesses remaining and change image
        if (numOfGuesses == 5) {
            $("#hangmanPic").html("<img id = 'hangmanPic' src='./assets/images/Hangman-1.png'>"); 
            $(".num_guesses_left").html("<a>You have 5 guesses left</a>");
        }
        else if (numOfGuesses == 3) {
            $("#hangmanPic").html("<img src='" + hangManImages[3] + "'>");
            $(".num_guesses_left").html("<a>You have 3 guesses left</a>");
        }
        //embedded if to control hint logic    
        if (numOfGuesses == 0) {
            losses++;
            console.log('you lose')
            $("#hangmanPic").html("<img src=" + hangManImages[6] + ">");
            $(".num_guesses_left").html("<a>You have 0 guesses left</a>");
            alert("You lost this round!");
        }
        else if (numOfGuesses == 4) {
            $("#hangmanPic").html("<img src=" + hangManImages[2] + ">");
            $(".num_guesses_left").html("<a>You have 4 guesses left</a>");
            alert(hints[computerChoice[0]]);
            console.log(hints[computerChoice[0]]);
        }
        else if (numOfGuesses == 2) {
            $("#hangmanPic").html("<img src=" + hangManImages[4] + ">");
            $(".num_guesses_left").html("<a>You have 2 guesses left</a>");
            alert(hints[computerChoice[1]]);
        }
        else if (numOfGuesses == 1) {
            $("#hangmanPic").html("<img src=" + hangManImages[5] + ">");
            $(".num_guesses_left").html("<a>You have 1 guesses left</a>");
            alert(hints.computerChoice[2]);
        }
    }
}