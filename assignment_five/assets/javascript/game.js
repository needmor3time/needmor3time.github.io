
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
            answer1 : questions.question1[4],
            answer2 : questions.question2[1],
            answer3 : questions.question3[2],
            answer4 : questions.question4[3],
            answer5 : questions.question5[1],
            answer6 : questions.question6[4],
            answer7 : questions.question7[3],
            answer8 : questions.question8[2],
            answer9 : questions.question9[4],
            answer10 : questions.question10[1],
            answer11 : questions.question11[2],
            answer12 : questions.question12[3],
        },

        correct = 0,
        wrong = 0,



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
            },

            start: function () {

                //  TODO: Use setInterval to start the count here and set the clock to running.
                if (!clockRunning) {
                    clockRunning = true;
                    intervalId = setInterval(stopwatch.count, 60000); //1 minute interval
                };

            },
            stop: function () {

                //  TODO: Use clearInterval to stop the count here and set the clock to not be running.
                clearInterval(intervalId);
                clockRunning = false;
            },

            count: function () {
                stopwatch.time--;
                if (stopwatch.time != 0) {
                    //if time doesn't equal 0, continue

                }
                else if (stopwatch.time == 0) {
                    //stop counter, tally totals, alert totals, end game
                    $("#display").html(stopwatch.time);
                    console.log(stopwatch.time);
                };
            },
            //function to update multiple choice
            multipleGuess: function () {
                $('.question-box').html("");
                for (var j = 1; j < 12; j++) {
                    $('.question-box').append($("<h4>" + questions[j].question + "</h4>"));
                    for (var i = 1; i < questions[j].question[i].length; i++) {
                        $('.question-box').append($("<input type='radio' value='" + questions[j].answers[i] + "' name='question-" + j + "'>" + questions[j].answers[i] + "<br>"));
                    }
                    $('.question-box').append('<hr>');
                };
            },





        },
    
        $("#start").click(function () {
            game.startGame();
        }),
    };
});





