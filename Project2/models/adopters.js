module.exports = function (sequelize, DataTypes) {
    var Adopters = sequelize.define("Adopters", {
      
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 50]
            }
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 50]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,

            }
        },
        
    })
    return Adopters;
};