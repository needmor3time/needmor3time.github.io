//INSIDE ROUTES FOLDER
var path = require("path");

//Middleware require
var isAuthenticated = require("../config/middleware/isAuthenticated.js");

module.exports = function(app){
    app.get("/", function(req, res){
        if(req.user){
            res.redirect("/index.html");
        }
        //this would send them to the signup page
        res.sendFile(path.join(__dirname, "../public/signup.html")); // <-- don't have this file
    });

    app.get("/login", function(req,res){
        if(req.user){
            res.redirect("/members");
        }
        res.sendFile(path.join(__dirname, "../public/login.html")); // <-- don't have this file
    });

    app.get("/members", isAuthenticated, function(req, res){
        res.sendFile(path.join(__dirname, "../public/members.html")); // <-- don't have this file
    });

    app.get('/test', function(req, res ){
        res.render('admin');
    })
};