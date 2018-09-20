// Steps to complete:

// 1. Initialize Firebase
// 2. Create button for adding new employees - then update the html + update the database
// 3. Create a way to retrieve employees from the employee database.
// 4. Create a way to calculate the months worked. Using difference between start and current time.
//    Then use moment.js formatting to set difference in months.
// 5. Calculate Total billed

// 1. Initialize Firebase
var config = {
    apiKey: "AIzaSyAf3JAUT5Ej56zy4mWi7pQKUzkBfNYmOBw",
    authDomain: "firetrain-a08c2.firebaseapp.com",
    databaseURL: "https://firetrain-a08c2.firebaseio.com",
    projectId: "firetrain-a08c2",
    storageBucket: "",
    messagingSenderId: "1021564328479"
  };
  firebase.initializeApp(config);

var database = firebase.database();

// 2. Button for adding Trains
$("#add-train-btn").on("click", function(event) {
  event.preventDefault();

  // Grabs user input
  var trnName = $("#train-name-input").val().trim();
  var trnDest = $("#dest-input").val().trim();
  var trnStart = moment($("#start-input").val().trim(), "HH:mm").format("X");
  var trnFreq = $("#freq-input").val().trim();

  // Creates local "temporary" object for holding employee data
  var newTrn = {
    name: trnName,
    dest: trnDest,
    start: trnStart,
    freq: trnFreq
  };

  // Uploads employee data to the database
  database.ref().push(newTrn);

  // Logs everything to console
  console.log(newTrn.name);
  console.log(newTrn.dest);
  console.log(newTrn.start);
  console.log(newTrn.freq);

  alert("Train successfully added");

  // Clears all of the text-boxes
  $("#train-name-input").val("");
  $("#dest-input").val("");
  $("#start-input").val("");
  $("#freq-input").val("");
});

// 3. Create Firebase event for adding train to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot) {
  console.log("childsnapshot", childSnapshot.val());

  // Store everything into a variable.
  var trnName = childSnapshot.val().name;
  var trnDest = childSnapshot.val().dest;
  var trnStart = childSnapshot.val().start;
  var trnFreq = childSnapshot.val().freq;

  // Employee Info
  console.log(trnName);
  console.log(trnDest);
  console.log(trnStart);
  console.log(trnFreq);

  // Prettify the employee start
  var trnStartPretty = moment.unix(trnStart).format("HH:mm");
  console.log("Train start pretty", trnStartPretty);

    // First Time (pushed back 1 year to make sure it comes before current time)
    var trnStartConverted = moment(trnStart, "hh:mm").subtract(1, "years");
    console.log(trnStartConverted);

    // Current Time
    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
  
    // Difference between the times
    var diffTime = moment().diff(moment(trnStartConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);
  
    // Time apart (remainder)
    var tRemainder = diffTime % trnFreq;
    console.log(tRemainder);
  
    // Minute Until Train
    var trnMins = trnFreq - tRemainder;
    console.log("MINUTES TILL TRAIN: " + trnMins);
  
    // Next Train
    var trnNext = moment().add(trnMins, "minutes").format("HH:mm");
    console.log("ARRIVAL TIME: " , trnNext);
  
    // Create the new row
  var newRow = $("<tr>").append(
    $("<td>").text(trnName),
    $("<td>").text(trnDest),
    $("<td>").text(trnStartPretty),
    $("<td>").text(trnFreq),
    $("<td>").text(trnNext),
    $("<td>").text(trnMins)
  );

  // Append the new row to the table
  $("#train-table > tbody").append(newRow);
});


