// Read and set any environment vars
//this is the .env param
require("dotenv").config();
var keys = require("./keys")
//require spotifiy keys
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var inquirer = require("inquirer");

var request = require('request');
var moment = require('moment');
var fs = require('fs');

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
  });

//command to take in do-what-it-says
function readFile () {
    fs.readFile("random.txt", "utf8", function(error, data) {
        if(error){
            return console.log(error);
        }
        //console.log(data);
        var dataArr = data.split(",");
        var action = dataArr[0];
        var title = dataArr[1];
        actionSelect(action, title);
    })
};

//command to take in movie-this
function movieThis (movieName) {
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    request(queryUrl, function (error, response, body) {
        if(error){
            console.log('error:', error); // Print the error if one occurred
        }
      
      //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        var mainBody = JSON.parse(body);

        console.log('Title:', mainBody.Title); 
        console.log('Released:', mainBody.Released); 
        console.log('IMDB rating:', mainBody.imdbRating); 
        for (var i = 0; i < (mainBody.Ratings).length; i++) {
            if (mainBody.Ratings[i].Source === "Rotten Tomatoes") {
                console.log('Rotten Tomatoes rating:', mainBody.Ratings[i].Value);
            };
        };
        console.log('Country of origin:', mainBody.Country); 
        console.log('Language:', mainBody.Language); 
        console.log('Plot:', mainBody.Plot); 
        console.log('Actors:', mainBody.Actors);

    });
};

// command to take in concert-this
function bandInTown (artist) {
    var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    request(queryUrl, function (error, response, body) {
        if(error){
            console.log('error:', error); // Print the error if one occurred
        }
      
      //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      for (var i = 0; i < JSON.parse(body).length; i++) {
        console.log("\n__________________________________\n");
        var mainBody = JSON.parse(body);
        console.log('Venue name:', mainBody[i].venue.name); 
        console.log('Venue location:', mainBody[i].venue.city + ", " + mainBody[i].venue.country); 
        console.log('Event date:', mainBody[i].datetime);
      }
    });
};

//command to take in spotify-this-song
function spotifyThis (songName) {
    spotify.search({ type: 'track', query: songName }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
      //add if statement here to look for an empty song field then
      if (data.tracks.items.length == 0) {
        readFile ();
      }
      
      //var mainData = JSON.parse(data);
      console.log('Artist: ', data.tracks.items[0].artists[0].name); 
      console.log('Song name: ', data.tracks.items[0].name); 
      console.log('Preview: ', data.tracks.items[0].artists[0].external_urls.spotify);
      console.log('Album: ', data.tracks.items[0].album.name);
      });
};

function actionSelect (action, title) {
    console.log("title", title);
    if (action == "Movies") {
        if (title == "") {
            title = "Mr. Nobody";
        }
        movieThis(title);
    } else if (action == "Concerts") {
        if (title == "") {
            title = "Weezer";
        }
        bandInTown(title);
    } else if (action == "Songs") {
        if (title == "") {
            title = "The Sign";
        }
        spotifyThis(title);
    }
};