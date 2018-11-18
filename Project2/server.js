var express = require("express");
// var bodyParser = require("body-parser");
// NEEDED FOR PASSPORTjs
var session = require("express-session");
var passport = require("./config/passport");

var PORT = process.env.PORT || 8888;

var app = express();

// app.get('/', function(req, res) {
 
//     res.send('Welcome to Passport with Sequelize');
 
// });
 
 
// app.listen(5000, function(err) {
 
//     if (!err)
//         console.log("Site is live");
//     else console.log(err)
 
// });
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));

// // parse application/json
// app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/dogController.js");



// Start our server so that it can begin listening to client requests.
// app.listen(PORT, function() {
//   // Log (server-side) when our server has started
//   console.log("Server listening on: http://localhost:" + PORT);
// });
//for passport login
var db = require("./models");

// var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//app.set('trust proxy', 1); //<--heroku potential fix
//app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());
app.use(routes);

// require("./routes/html-routes.js")(app);
// require("./routes/api-routes.js")(app);

db.sequelize.sync().then(function(){
    app.listen(PORT, function(){
        console.log("Listening on port", PORT)
    })
})