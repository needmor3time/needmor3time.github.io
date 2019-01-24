var express = require("express");

var router = express.Router();

var db = require("../models");

//Find one


//create new note
// Route for grabbing a specific Article by id, populate it with it's note
router.get("/articles/:id", function(req, res) {
 
  db.Note.find({_articleId : req.params.id})
    // Specify that we want to populate the retrieved users with any associated notes
    //.populate("Note")
    .then(function(dbArticle) {
      // If able to successfully find and associate all Users and Notes, send them back to the client
      console.log("note get findOne: ", dbArticle)
      res.json(dbArticle);
    })
    .catch(function(err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
});

// Route for saving/updating an Article's associated Note
router.post("/articles/:id", function(req, res) {
  console.log("this is the note.js route");
  console.log("req.body: ", req.body);
  db.Note.create(req.body).then (function(dbNote) {
    console.log("note post dbnote: ", dbNote);
    return db.Article.findOneAndUpdate({_id: req.params.id}, {$push:{note: dbNote._id}}, {upsert:true});
  })
    // Specify that we want to populate the retrieved users with any associated notes
    .then(function(dbArticle) {
      console.log("dbArticle in note.js", dbArticle);
      res.json(dbArticle);
      // If able to successfully find and associate all Users and Notes, send them back to the client
      if (data.note) {
        // Place the body of the note in the body textarea
        $("#bodyinput").val(data.note.body);
      }
    })
    .catch(function(err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
});
//delete note
router.delete("/notes/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    db.Note.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

//export to use
module.exports = router