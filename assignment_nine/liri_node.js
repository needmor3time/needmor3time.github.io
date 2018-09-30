// Load the NPM Package inquirer
var inquirer = require("inquirer");
var spotify = require('node-spotify-api');

// Create a "Prompt" with a series of questions.
inquirer
  .prompt([

    // Here we give the user a list to choose from.
    {
      type: "list",
      message: "Which do you want to do?",
      choices: ["Songs", "Concerts", "Movies"],
      name: "action"
    },
    // Here we create a basic text prompt.
    {
      type: "input",
      message: "What is the name of what you are looking for?",
      name: "title"
    }
  ])
  .then(function(inquirerResponse) {
    actionSelect(inquirerResponse.action, inquirerResponse.title);
    // // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
    // console.log(inquirerResponse.noname);
    // console.log(inquirerResponse.nocolor);
    // if (inquirerResponse.confirm && inquirerResponse.noname && inquirerResponse.nocolor) {
    //   console.log("\n" + inquirerResponse.username + " you may pass.");
    // }
    // else if (inquirerResponse.noname != 1){
    //     console.log("\n" + inquirerResponse.username + " you're not sure of your name?");
    // }
    // else if (inquirerResponse.nocolor != 1){
    //     console.log("\n" + inquirerResponse.username + ", I might have to throw you off the bridge now.");
    // }
    // else {
    //   console.log("\nThat's okay " + inquirerResponse.username + ", come again when you are more sure.\n");
    // }
  });