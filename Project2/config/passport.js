//INSIDE CONFIG FOLDER
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

//Using passport to login with username(email) and password
passport.use(new LocalStrategy(
    {
        usernameField: "email"
    },
function(email, password, done){
    //Finding the user by email in db
    db.User.findOnes({
        where:{
            email: email
        }
    }).then(function(dbUser){
        //No user email in db
        if (!dbUser){
            return done(null, false, {
                message: "Invalid email. Please try again."
            });
        //Wrong password associated with email in db
        } else if (!dbUser.validPassword(password)){
            return done(null, false, {
                message:"Invalid password."
            });
        }
        //username/password match db
        return done(null, dbUser);
    });
}));

//Boilerplate needed in order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
passport.serializeUser(function(user, cb){
    cb(null, user);
});
passport.deserializeUser(function(obj, cb){
    cb(null, obj);
});

//Exporting our configured passport. Required in (../routes/api-routes.js)
module.exports = passport;