var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");

// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
var axios = require("axios");
var cheerio = require("cheerio");

// Require all models
var db = require("./models");

var PORT = 3000;

// Initialize Express
var app = express();

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Configure middleware
var articleRoutes = require("./controllers/article.js");
var noteRoutes = require("./controllers/note.js");

app.use(articleRoutes);
app.use(noteRoutes);

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose.connect(MONGODB_URI); //, { useNewUrlParser: true });

// Routes

// A GET route for scraping the echoJS website
// app.get("/scrape", function(req, res) {
//   // First, we grab the body of the html with axios
//   axios.get("http://www.echojs.com/").then(function(response) {
//     // Then, we load that into cheerio and save it to $ for a shorthand selector
//     var $ = cheerio.load(response.data);

//     // Now, we grab every h2 within an article tag, and do the following:
//     $("article h2").each(function(i, element) {
//       // Save an empty result object
//       var result = {};

//       // Add the text and href of every link, and save them as properties of the result object
//       result.title = $(this)
//         .children("a")
//         .text();
//       result.link = $(this)
//         .children("a")
//         .attr("href");

//       // Create a new Article using the `result` object built from scraping
//       db.Article.create(result)
//         .then(function(dbArticle) {
//           // View the added result in the console
//           console.log(dbArticle);
//         })
//         .catch(function(err) {
//           // If an error occurred, log it
//           console.log(err);
//         });
//     });

//     // Send a message to the client
//     res.send("Scrape Complete");
//   });
// });

// Route for getting all Articles from the db
app.get("/articles", function(req, res) {
  // TODO: Finish the route so it grabs all of the articles
  db.Article.find({})
    // Specify that we want to populate the retrieved users with any associated notes
    .then(function(dbArticle) {
      // If able to successfully find and associate all Users and Notes, send them back to the client
      res.json(dbArticle);
    })
    .catch(function(err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
});

// Route for grabbing a specific Article by id, populate it with it's note
app.get("/articles/:id", function(req, res) {
 
  db.Article.findOne({_id : req.params.id})
    // Specify that we want to populate the retrieved users with any associated notes
    .populate("note")
    .then(function(dbArticle) {
      // If able to successfully find and associate all Users and Notes, send them back to the client
      res.json(dbArticle);
    })
    .catch(function(err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
});

// Route for saving/updating an Article's associated Note
// app.post("/articles/:id", function(req, res) {
//   console.log("this is the server.js route")
//   db.Note.create(req.body).then (function(dbNote) {
//     return db.Article.findOneAndUpdate({_id: req.params.id}, {note: dbNote._id}, {new: true});
//   })
//     // Specify that we want to populate the retrieved users with any associated notes
//     .then(function(dbArticle) {
//       res.json(dbArticle);
//       // If able to successfully find and associate all Users and Notes, send them back to the client
//     })
//     .catch(function(err) {
//       // If an error occurs, send it back to the client
//       res.json(err);
//     });
// });


// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
