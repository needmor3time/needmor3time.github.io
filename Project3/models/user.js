const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs"); 
const saltRounds = 10; 

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String, 
        required: true,
        unique: true, 
        minlength: 3, 
        maxlength: 20 
    }, 
    password: {
        type: String, 
        required: true, 
        minlength: 6, 
        maxlength: 15
    }, 
    name: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 50
    },
    streetAddress: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    }, 
    apartmentNum: {
        type: String,
        maxlength: 10
    }, 
    city: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50
    },
    zipcode: {
        type: Number, 
        required: true,
        minlength: 5,
        maxlength: 5
    },
}); 

UserSchema.pre('save', function(next){
    let user = this;

    if (!user.isModified('password')) return next(); 

    bcrypt.genSalt(saltRounds, function(err, salt){
        if (err) return next(err);
        
        bcrypt.hash(user.password, salt, null, function(err, hash){
            if (err) return next(err);

            user.password = hash; 
            next();            
        });
    });
});

//for comparing password after it's created, the next time they sign in
UserSchema.methods.comparePassword = function comparePassword(candidatePassword, cb){
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
        if (err) return cb(err);
        return cb(null, isMatch);
    });
};

let User = mongoose.model("Users", UserSchema);
module.exports = User;