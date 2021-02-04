const jwt = require("jsonwebtoken")

const generateToken = (payload) => {
    return jwt.sign(payload, process.env.SECRET_JWT)
}

const verifyToken = (access_token) => {
    return jwt.verify(access_token, process.env.SECRET_JWT)
}

module.exports = { generateToken, verifyToken }
