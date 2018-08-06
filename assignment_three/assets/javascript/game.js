

    var greekGods = [“Zuess”, “Hades”, “Posiden”, “Hera”, “Aphrodite”, “Hermes”, “Athena”, “Aries”, “Apollo”, “Kronus”]

    var hintZuess = [“male”, “oldest brother”, “most powerful”]
    var hintHades = [“male”, “big three”, “underworld”]
    var hintPosiden = [“male”, “big three”, “water lover”]
    var hintHera = [“female”, “amazon enforcer”, “wife of the big guy”]
    var hintAphrodite = [“female”, “fairest of the gods”, “love not war”]
    var hintHermes = [“male”, “messenger”, “florist symbol with winged feet”]
    var hintAthena = [“female”, “warrior goddess”, “patron of Athens”]
    var hintAries = [“male”, “Zuess’s son”, “war god”]
    var hintApollo = [“male”, “Zuess’s son”, “sun god”]
    var hintKronus = [“male”, “first god”, “killed by his sons”]

    var wins = 0;
    var losses = 0;
    var numOfGuesses = 6;
    //setting guessed letters and dashes arrays to empty
    var guessedLetters = []
    var dashes = []

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerChoice = greekGods[Math.floor(Math.random() * greekGods.length)];
    console.log(computerChoice);
    //create array for computer_choice
    var computer_choice = computerChoice.split("");
    //load dashes array with actual dashes
    for (var i=0; i < computerChoice.length; i++) {
        dashes.push("_");
    }    
    
    /* button_press = start game loop */
        document.onkeyup = function(event) {
            var key_guess = event.key;
        


        
        
        // update window with key guess <-- due to array, it needs to start with 0, therefore the -1
        if(computerChoice.indexOf(key_guess)>-1) {
            // update dashes with letter(s)
            computerChoice.indexOf(key_guess) = j;
            //update matching dash index with letter
            computerChoice.text = dashes[j];
            // update guessedLetters array
            guessedLetters.push("key");
            //checks dashes array for dashes to see if they have guessed all letters correctly
            if (function checkDashes (dashes) {
                dashes != "_";
            })
                {
                //if there are no dashes, increment wins
                wins++;
                //if wins = 6, end the game
                if(wins == 6) {
                    <span id="user-game-win"><strong>You know your Greek gods!</strong></span>;
                    // reset game
                    return;
                }
                //if wins don't equal 6, send message and continue
                else <span id="user-win"><strong>You won this round!</strong></span>;
            }
        //condition of picking the same letter more than once
        } else if (guessedLetters.indexOf(key_guess)>-1) {
                //do nothing if already guessed letter
                <span id="sameGuess">You already guessed that letter.</span>;
        }
        //condition of incorrect new letter
        else {
            //update guessedLetters array
            guessedLetters.push("key");
            //update hangman progression linked to the number of guesses remaining
                if (numOfGuesses == 5) {
                    //display initially https://upload.wikimedia.org/wikipedia/commons/8/8b/Hangman-0.png
                    //display after 1 wrong https://en.wikipedia.org/wiki/File:Hangman-1.png

                }
            //update numOfGuesses -1  embed if statement to check for numOfGuesses = 0
            numOfGuesses--;
                //embedded if to control hint logic    
                if (numOfGuesses == 0) {
                    losses++;
                    <span id="user-loss"><strong>You lost this round!</strong></span>;
                }
                else if (numOfGuesses == 4) {
                    var hint1 = (hint + $(computerChoice) + [0]);
                    document.write(hint1);
                }
                else if (numOfGuesses == 2) {
                    var hint2 = (hint + $(computerChoice) + [1]);
                    document.write(hint2);
                }
                else if (numOfGuesses == 1) {
                    var hint3 = (hint + $(computerChoice) + [2]);
                    document.write(hint3);
                }   
        }




        
        
    }
