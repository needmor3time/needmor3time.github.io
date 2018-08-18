
$(document).ready(function () {

    var game = {
        norseGods =["question1", "question2", "question3", "question4", "question5", "question6", "question7", "question8", "question9", "question10", "question11", "question12"],

        questions = {
            question1: ["How did Odin lose his eye", "In the battle with Jodenheim", "Pulled out by an eagle while on a quest", "To win all battles until the end of time", "To drink from the pool of the Norns"],
            question2: ["What are the names of Loki's offspring", "Hella and Fenrir", "Frigg and Frigga", "Hella and Freyja", "Hoognir and Munjir"],
            question3: ["Which god or godess lost their hand to a giant wolf", "Balder", "Tyr", "Heimdal", "Rigg"],
            question4: ["What is one of Heimdal's disguised names", "Munin", "Sigfruin", "Rigg", "Bouldin"],
            question5: ["Which one of the following is NOT one of the nine realms", "Hafleheim", "Nifleheim", "Helheim", "Vaniheim"],
            question6: ["How many children did Thor have", "None", "1", "2", "3"],
            question7: ["Who gave birth to Odin's horse, Sleipnir", "the horse that pulls the world around the sun", "the frost giant's King's horse", "Loki", "Fenris"],
            question8: ["Who wept tears of gold when they thought they were going to have to marry and ugly stone smith", "Frigga", "Freyja", "Indunna", "Sif"],
            question9: ["What food kept the gods youthful", "Mead", "Honey", "Nectar", "Apples"],
            question10: ["What creature does Thor kill, but in turn dies from his wounds in Ragnarok", "Jormongand", "Fenrir", "Loki", "Surter"],
            question11: ["What is the name of Odin's spear", "Mjolnir", "Gungnir", "Yggridsil", "Hagrath"],
            question12: ["Who kills the god Kvasir", "Jormongand", "Fenrir", "dwarves", "dark elves"]
        },

        correctAnswers = {
            question1 = 4,
            question2 = 1,
            question3 = 2,
            question4 = 3,
            question5 = 1,
            question6 = 4,
            question7 = 3,
            question8 = 2,
            question9 = 4,
            question10 = 1,
            question11 = 2,
            question12 = 3,
        },

        correct = 0,
        wrong = 0,



        // /* button_press = start game */
        // //document.onkeyup = function (event) {
        //     $(document).ready(function(){
        //         $("start-btn").click(function(){
        //             $(this).start();
        //         }),
        // //start-btn press show first question and start timer
        // //need start function to execute start timer and multipleGuess function
        // // start timer
        // startTimer: function () {
        //     setInterval(multipleGuess(), 10000);//<--need to add function
        // },

        // // Randomly chooses a choice from the norseGods array. This is the Computer's guess.
        // var computerChoice = norseGods[Math.floor(Math.random() * norseGods.length)];
        // console.log(questions[computerChoice][0]),
        // // pop the question out of the norseGods array to eliminate duplicate quetions    

        startGame: function () {

            //  Click events are done for us:
            $("#stop").click(stopwatch.stop);
            $("#reset").click(stopwatch.reset);
            $("#start").click(stopwatch.start);
        },

        //  Variable that will hold our setInterval that runs the stopwatch
        intervalId,

        // prevents the clock from being sped up unnecessarily
        clockRunning = false,

        //  Our stopwatch object.
        stopwatch = {

            time: 0,

            reset: function () {

                stopwatch.time = 0;
                $("#display").html("00");
                //  TODO: Change the "display" div to "00:00."

            },

            start: function () {

                //  TODO: Use setInterval to start the count here and set the clock to running.
                if (!clockRunning) {
                    clockRunning = true;
                    intervalId = setInterval(stopwatch.count, 60000); //1 minute interval
                }

            },
            stop: function () {

                //  TODO: Use clearInterval to stop the count here and set the clock to not be running.
                clearInterval(intervalId);
                clockRunning = false;
            },

            count: function () {
                //if button press before timer expires
                //take selected button and determine if correct or incorrect
                //flash message saying correct or incorrect
                //increment the score of correct or incorrect
                //if number of correct and incorrect !=6
                //continue
                //else end game
                //else increment number of incorrect by 1
                //if number of correct and incorrect !=6
                //continue
                //else end game
                //  TODO: increment time by 1, remember we cant use "this" here.
                stopwatch.time--;
                if (stopwatch.time != 0) {
                    //if all buttons clicked end game

                } else if (stopwatch.time == 0) {
                    //stop counter, tally totals, alert totals, end game
                }
                //  TODO: Use the variable you just created to show the converted time in the "display" div.
                $("#display").html(stopwatch.time);
            },

            //function to update multiple choice
            multipleGuess: function () {
                for (var j = 1; j < 12; j++) {
                    question.questions[j].push(id + [i]);

                    for (var i = 1; i < 4; i++) {
                        var button = $("<button>");
                        button.attr("id", answer[i])
                        question.questions[j].append(button + [i]);
                    }
                }
            },


            //push the question[0] to the question placeholder
            //multipleGuess(game.norseGods.question[0]),






            //         // update guessedLetters array
            //         guessedLetters.push(event.key);
            //         $(".display_guesses").html(dashes);
            //         //checks dashes array for dashes to see if they have guessed all letters correctly
            //         if(dashes.indexOf("_") == -1)  {
            //         console.log('game won');
            // //if there are no dashes, increment wins
            // wins++;
            // //if wins = 6, end the game
            // if (wins == 6) {
            //     alert("You know your Greek gods!");
            //     // reset game
            //     return;
            // }
            // //if wins don't equal 6, send message and continue
            // else {
            //     //document.getElemnetById("wins").innerHTML("You won this round!")
            //     alert("You won this round!");
            // }
            //         }
            //         //condition of picking the same letter more than once
            //     } else if (guessedLetters.indexOf(key_guess) > -1) {
            //     //do nothing if already guessed letter
            //     alert("You already guessed that letter.");
            //     console.log('already guessed');
            // }
            // //condition of incorrect new letter
            // else if (computer_choice.indexOf(key_guess) === -1) {
            //     console.log('wrong guess');
            //     //update guessedLetters array
            //     guessedLetters.push(event.key);
            //     //update numOfGuesses -1  embed if statement to check for numOfGuesses = 0
            //     numOfGuesses--;
            //     //update hangman progression linked to the number of guesses remaining and change image
            //     if (numOfGuesses == 5) {
            //         $("#hangmanPic").attr("src", "./assets/images/Hangman-1.png");
            //         $(".num_guesses_left").html("<a>You have 5 guesses left</a>");

            //     }
            //     else if (numOfGuesses == 3) {
            //         $("#hangmanPic").attr("src", "./assets/images/Hangman-3.png");
            //         $(".num_guesses_left").html("<a>You have 3 guesses left</a>");
            //     }
            //     //embedded if to control hint logic    
            //     if (numOfGuesses == 0) {
            //         losses++;
            //         $("#hangmanPic").attr("src", "./assets/images/Hangman-6.png");
            //         $(".num_guesses_left").html("<a>You have 0 guesses left</a>");
            //         alert("You lost this round!");
            //     }
            //     else if (numOfGuesses == 4) {
            //         $("#hangmanPic").attr("src", "./assets/images/Hangman-2.png");
            //         $(".num_guesses_left").html("<a>You have 4 guesses left</a>");
            //         console.log(hints[computerChoice][0]);
            //         alert(hints[computerChoice][0]);

            //     }
            //     else if (numOfGuesses == 2) {
            //         $("#hangmanPic").attr("src", "./assets/images/Hangman-4.png");
            //         $(".num_guesses_left").html("<a>You have 2 guesses left</a>");
            //         console.log(hints[computerChoice][1]);
            //         alert(hints[computerChoice][1]);
            //     }
            //     else if (numOfGuesses == 1) {
            //         $("#hangmanPic").attr("src", "./assets/images/Hangman-5.png");
            //         $(".num_guesses_left").html("<a>You have 1 guess left</a>");
            //         console.log(hints[computerChoice][2]);
            //         alert(hints[computerChoice][2]);
            //     }
            // }


        }
    }
    $("#start").click(function(){
        game.startGame();
    });
});




