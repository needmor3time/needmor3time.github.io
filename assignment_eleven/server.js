// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Basic route that sends the user first to the AJAX Page
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

  // Displays a single character, or returns false
// app.post("/api/reservation", function(req, res) {
//     console.log("req info", req);
//     var reservation = req.body;
//     connection.query("SELECT count(*) FROM reservation",function (err, res){
//         console.log("res", res);
//         if (res > 5) {
//             reservation.reservation_flag = false;
//             connection.query("UPDATE reservation_flag");
//         } else {reservation.reservation_flag = true};
//     };
    
  
//     console.log(reservation);

//     return res.json(false);
//   });
  
//   // Displays all tables
// app.get("/tables", function(req, res) {
//     return res.json(tables);
//   });

  app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });