//THIS GOES IN MODELS FOLDER

//Requiring bcrypt for password hashing
//need to test on windows
var bcrypt = require("bcrypt-nodejs");

//Create User model
module.exports = function(sequelize, DataTypes){
    var User = sequelize.define("User", {
        //User email cannot be null and validated for actual email
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        //Password cannot be null
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    User.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    };
    // Hooks are automatic methods that run during various phases of the User Model lifecycle
    // Used for password hashing
    User.addHook("beforeCreate", function(user){
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });
    return User;
};