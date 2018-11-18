//INSIDE CONFIG WITHIN MIDDLEWARE FOLDER
//Middleware for restricting routes-user not logged in
module.exports = function(req, res, next){
    //If user is logged in continue request
    if(req.user){
        return next();
    }
    //User not logged in gets redirected to login page
    return res.redirect("/");
};