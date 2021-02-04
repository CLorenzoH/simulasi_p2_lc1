const { User, Gallery } = require("../models/")
const { compare } = require("../helper/bcrypt")
const { generateToken } = require("../helper/jwt")

module.exports = class Controller {
    static register(req, res, next) {
        const { email, password } = req.body
        User.create({ email, password })
            .then((data) => {
                res.status(201).json({
                    id: data.id,
                    email: data.email,
                })
            })
            .catch((err) => {
                next(err)
            })
    }

    static login(req, res, next) {
        const { email, password } = req.body
        User.findOne({ where: { email } })
            .then((data) => {
                if (!data) {
                    throw {
                        status: 400,
                        errors: " Invalid Email or Password",
                    }
                }
                const compared = compare(password, data.password)
                if (!compare) {
                    throw {
                        status: 40,
                        errors: "Invalid Email or Password",
                    }
                } else {
                    const access_token = generateToken({
                        id: data.id,
                        email: data.email,
                    })
                    res.status(200).json({
                        id: data.id,
                        email: data.email,
                        access_token,
                    })
                }
            })
            .catch((err) => {
                next(err)
            })
    }

    static getPhotos(req, res, next) {
        console.log("masuk")
        console.log(req.decoded, " <<<<<<")
        const UserId = req.decoded.id
        console.log(UserId)
        console.log(UserId)
        Gallery.findAll({
            where: {
                UserId: UserId,
            },
        }).then((data) => {
            res.status(200).json({ photos: data })
        })
    }
}
