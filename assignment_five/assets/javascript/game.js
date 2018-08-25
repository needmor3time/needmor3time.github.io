
$(document).ready(function () {

    var game = {
        questions : [
            {
                question : "How did Odin lose his eye",
                answers : ["In the battle with Jodenheim", "Pulled out by an eagle while on a quest", "To win all battles until the end of time", "To drink from the pool of the Norns"],
                answer : "To drink from the pool of the Norns",
            },
            {
                question : "What are the names of Loki's offspring",
                answers : ["Hella and Fenrir", "Frigg and Frigga", "Hella and Freyja", "Hoognir and Munjir"],
                answer : "Hella and Fenrir",
            },
            {
                question : "Which god or godess lost their hand to a giant wolf",
                answers : ["Balder", "Tyr", "Heimdal", "Rigg"],
                answer : "Tyr",
            },
            {
                question : "What is one of Heimdal's disguised names",
                answers : ["Munin", "Sigfruin", "Rigg", "Bouldin"],
                answer : "Rigg",
            },
            {
                question : "Which one of the following is NOT one of the nine realms",
                answers : ["Hafleheim", "Nifleheim", "Helheim", "Vaniheim"],
                answer : "Hafleheim",
            },
            {
                question : "How many children did Thor have",
                answers : ["None", "1", "2", "3"],
                answer : "3",
            },
            {
                question : "Who gave birth to Odin's horse, Sleipnir",
                answers : ["the horse that pulls the world around the sun", "the frost giant's King's horse", "Loki", "Fenris"],
                answer : "3",
            },
            {
                question : "Who wept tears of gold when they thought they were going to have to marry and ugly stone smith",
                answers : ["Frigga", "Freyja", "Indunna", "Sif"],
                answer : "Freyja",
            },
            {
                question : "What food kept the gods youthful",
                answers : ["Mead", "Honey", "Nectar", "Apples"],
                answer : "Apples",
            },
            {
                question : "What creature does Thor kill, but in turn dies from his wounds in Ragnarok",
                answers : ["Jormongand", "Fenrir", "Loki", "Surter"],
                answer : "Apples",
            },
            {
                question : "What is the name of Odin's spear",
                answers : ["Mjolnir", "Gungnir", "Yggridsil", "Hagrath"],
                answer : "Gungnir",
            },
            {
                question : "Who kills the god Kvasir",
                answers : ["Jormongand", "Fenrir", "dwarves", "dark elves"],
                answer : "dwarves",
            },
        ],
        correct : 0,
        wrong : 0,
        time: 60,
        //  Variable that will hold our setInterval that runs the stopwatch
        intervalId : 0,



        //  Our stopwatch object.
        stopwatch : {

            
            reset: function () {

                
                $("#display").html("00");//display doesn't not exist in html
            },

            start: function () {

                //  Set time, Use setInterval to start the count here and set the clock to running.
                time = 60;
                clearInterval(game.intervalId);
                game.intervalId = setInterval(this.count, 1000);
            },
            stop: function () {

                //  TODO: Use clearInterval to stop the count here and set the clock to not be running.
                clearInterval(game.intervalId);
                console.log("interval after clear", game.intervalId);
                //submitGame(); commenting out to prevent loop
            },

            count: function () {
                //display time each time count fires (should be ever 1000ms)
                $('.timer').text(this.time);
                //if time doesn't equal 0, decrement time and check again for 0
                if (this.time != 0) {
                    this.time--;
                    if (this.time == 0) {
                        //stop time, tally totals, alert totals, end game
                        console.log("display time", this.time);
                        stop();
                        this.submitGame();//adding submit game function when time is up
                    };
                    

                }
                // else if (this.time == 0) {
                //     //stop time, tally totals, alert totals, end game
                //     console.log("this won't run", this.time);
                //     stop();
                // };
            },
            //function to update multiple choice
            multipleGuess: function () {
                $('.question-box').html("");
                for (var j = 0; j < game.questions.length; j++) {
                    console.log("game questions", game.questions[j]);
                    $('.question-box').append($("<h4>" + game.questions[j].question + "</h4>"));
                    for (var i = 0; i < game.questions[j].answers.length; i++) {
                        console.log("answers for each question", game.questions[j].answers[i]); 
                        $('.question-box').append($("<input type='radio' value=' " + game.questions[j].answers[i] + "' name='question-" + j + "'>" + game.questions[j].answers[i] + "<br>"));
                    }
                    $('.question-box').append('<hr>');
                };
            },

            submitGame : function () {
                for (var j = 0; j < game.questions.length; j++)  {
                    console.log("position in array", j);
                    $.each($("input[name='question-" + j + "']:checked"), function() {
                        var userGuess = $(this).attr('value');
                        console.log("userGuess", userGuess);
                        console.log("correctAnswer", game.questions[j].answer);
                        if (userGuess === game.questions[j].answer) {
                            console.log('correct');
                            correct++;
                        } else {
                            console.log('incorrect');
                            incorrect++;
                        }
                    });  
                }
                this.stop();//adding stop function when submit is hit
                $('.correct').text(correct);
                $('.incorrect').text(incorrect);
                $('.end-screen').show();
            },

            newGame : function () {
                correct = 0;
                incorrect = 0;
                // shuffleQuestions();
                // shuffleAnswers();
                this.multipleGuess();
                this.start();
                $(".end-screen").hide();
            },

            

           




        }
    };
    game.stopwatch.newGame();

    $("#submitGame").on('click', function() {
        game.stopwatch.submitGame();
        stop();
    });

    $('#newGame').on('click', function() {
        game.stopwatch.newGame();
    });
        
});




