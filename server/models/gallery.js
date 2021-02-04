"use strict"
//@ts-check
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
    class Gallery extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Gallery.belongsTo(models.User, {
                foreignKey: "UserId",
            })
        }
    }
    Gallery.init(
        {
            imgUrl: DataTypes.STRING,
            UserId: {
                type: DataTypes.INTEGER,
                references: {
                    model: "Users",
                    key: "id",
                },
            },
        },

        {
            sequelize,
            modelName: "Gallery",
        }
    )
    return Gallery
}
