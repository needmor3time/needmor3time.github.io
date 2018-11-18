module.exports = function (sequelize, DataTypes) {
    var Dogs = sequelize.define("Dogs", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 50]
            }
        },
        breed: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        gender: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        experience: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        pic: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        profile: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        other_dogs: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        cats: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        exercise: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        special: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        children: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        size: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        fur: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        food: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        protective: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        experience: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    }, {timestamps: false});


    // Dogs.associate = function (models) {
    //     Dogs.belongsTo(models.Adopters, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };

    return Dogs;
};