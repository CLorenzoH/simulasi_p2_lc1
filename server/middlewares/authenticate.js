//@ts-check
const jwt = require("jsonwebtoken")

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
function authenticate(req, res, next) {
    try {
        const access_token = req.headers.access_token
        const decoded = jwt.verify(access_token, process.env.SECRET_JWT)
        req.decoded = decoded
        next()
    } catch (err) {
        console.log(`Authenticate error`, err.message)
        res.status(401).json({
            msg: `Invalid token`,
        })
    }
}

module.exports = { authenticate }
