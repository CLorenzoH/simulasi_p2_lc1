//@ts-check
const { User, Gallery } = require("../models")

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
async function authorize(req, res, next) {
    try {
        console.log(req.decoded, "<<<<")
        const data = await Gallery.findOne({
            where: { UserId: req.decoded.id },
        })
        if (data.UserId !== req.decoded.id) {
            throw err
        }
        next()
    } catch (err) {
        console.log(`Autherize error`, err.message)
        res.status(401).json({
            msg: `Not Authorize`,
        })
    }
}

module.exports = { authorize }
