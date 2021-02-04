const bcrypt = require("bcryptjs")

const hashing = (password) => {
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(password, salt)
}

const compare = (plain, hashed) => {
    return bcrypt.compareSync(plain, hashed)
}

module.exports = { hashing, compare }
