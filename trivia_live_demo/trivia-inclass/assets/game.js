$(document).ready(function() {

// global variable
// --------------------------------------------------------------------

    var questions = [
            {
                question: "what is the worlds longest river",
                answers: ["Amazon", "Nile", "Yangtze", "Mississippi"],
                answer: "Amazon"
            },
            {
                question: "Which Country has the highest population density",
                answers: ["Macau", "Monaco", "Singapore", "Hong Kong"],
                answer: "Macau"
            },
            {
                question: "what is the largest dessert on Earth",
                answers: ["Sahara", "Gobi", "Arabian", "Kalahari"],
                answer: "Sahara"
            },
            {
                question: "Which of these countries does <u>NOT</u> have a Monarch",
                answers: ["Portugal", "Denmark", "Belgium", "Spain"],
                answer: "Portugal"
            },
            {
                question: "What is the world's largest lake",
                answers: ["Caspian Sea", "Lake Superior", "Lake Victoria", "Lake Huron"],
                answer: "Caspian Sea"
            }    
    ];

    var correct = 0;
    var incorrect = 0;
    var counter = 60;
    var intervalId;

// functions
// --------------------------------------------------------------------

    function runTimer() {
        counter = 10;
        clearInterval(intervalId);
        intervalId = setInterval(decrementTimer, 1000)
    }

    function decrementTimer() {
        counter--;
        $('.timer').text(counter);
        console.log(counter);
        if (counter === 0) {
            stopTimer();
            console.log('time over');
        }
    }

    function stopTimer() {
        clearInterval(intervalId);
        submitGame();
    }



    function addQuestions() {
        $('.question-box').html("");
        for (var i=0; i<questions.length; i++) {
            $('.question-box').append($("<h4>" + questions[i].question + "</h4>"));
            for (var k=0; k<questions[i].answers.length; k++) {
                $('.question-box').append($("<input type='radio' value='" + questions[i].answers[k] + "' name='question-" + i + "'>" + questions[i].answers[k] + "<br>" ));
            }
            $('.question-box').append('<hr>');
        }
    }

    function submitGame() {
        for (var i=0; i<questions.length; i++)  {
            $.each($("input[name='question-" + i + "']:checked"), function() {
                console.log($(this).attr('value'));
                var userGuess = $(this).attr('value');
                if (userGuess === questions[i].answer) {
                    console.log('correct');
                    correct++;
                } else {
                    console.log('incorrect');
                    incorrect++;
                }
            });  
        }
        $('.correct').text(correct);
        $('.incorrect').text(incorrect);
        $('.end-screen').show();
    }

    function newGame() {
        correct = 0;
        incorrect = 0;
        shuffleQuestions();
        shuffleAnswers();
        addQuestions();
        runTimer();
        $(".end-screen").hide();
    }

    function shuffleQuestions() {
        questions.sort(function(a, b){return 0.5 - Math.random()});
    }

    function shuffleAnswers() {
        for (var i=0; i<questions.length; i++) {
            questions[i].answers.sort(function(a, b){return 0.5 - Math.random()});
        }   
    }



// main process
// --------------------------------------------------------------------
    
    
    newGame();

    $('#submitGame').on('click', function() {
        // submitGame();
        stopTimer();
    });

    $('#newGame').on('click', function() {
        newGame();
    });

});


// 1: make files
// 2: html wireframe
// 3: make questions array
// 4: add questions to screen
// 5: function to submit answers and check if they are correct
// 6: make timer fucntions