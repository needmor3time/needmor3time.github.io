var express = require("express");

var router = express.Router();
var cheerio = require("cheerio");
var axios = require("axios");
var db = require("../models");


router.get("/", function(req, res) {
    db.Article.find({})
    .then(function(data) {
          var hbsObject = {
            articles: data
          };
          console.log("handlebars article get", hbsObject);
          res.render("home", hbsObject);
        })
        .catch(function(err){
            console.log(err);
        })
})
//Find all
router.get("/scrape", function(req, res) {
    console.log("scrape route hit");
    db.Article.remove({})
        .then(function(){
            console.log("articles removed");
        })
        .catch(function(err){
            console.log(err);
        })
    axios.get("https://www.nraila.org/").then(function(res){
        var $ = cheerio.load(res.data);
        $(".news-article-headline").each(function(i, element) {
            var result = {};

            result.title = $(this).children("a").text();
            console.log("result.title", result.title);

            result.link = $(this).children("a").attr("href"); // took out "https://www.nraila.org" + 
            console.log("link", result.link);

            db.Article.create(result)
                .then(function(dbArticle) {
                    console.log(dbArticle);
                })
                .catch(function(err){
                    console.log(err);
                })
        })
    });

    res.send("Scrape Complete");
  });

//update article

//delete article
module.exports = router;