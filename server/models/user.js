"use strict"
//@ts-check
const { Model } = require("sequelize")
const { hashing } = require("../helper/bcrypt")
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            User.hasMany(models.Gallery)
        }
    }
    User.init(
        {
            email: DataTypes.STRING,
            password: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "User",
            hooks: {
                beforeCreate: (user, opt) => {
                    user.password = hashing(user.password)
                },
            },
        }
    )
    return User
}
