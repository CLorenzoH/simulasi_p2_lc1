"use strict"
//@ts-check
module.exports = {
    up: (queryInterface, Sequelize) => {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        return queryInterface.bulkInsert(
            "Galleries",
            [
                {
                    imgUrl: "https://unsplash.com/photos/yC-Yzbqy7PY",
                    UserId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    imgUrl: "https://unsplash.com/photos/yC-Yzbqy7PY",
                    UserId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    imgUrl: "https://unsplash.com/photos/yC-Yzbqy7PY",
                    UserId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    imgUrl: "https://unsplash.com/photos/yC-Yzbqy7PY",
                    UserId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        )
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("Galleries", null, {})
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
}
