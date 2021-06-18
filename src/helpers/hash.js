const bcrypt = require('bcryptjs')

const encryptPassword = (password) => {
    const salt = bcrypt.genSaltSync()
    return bcrypt.hashSync(password, salt);
}

const comparePassword = (password, userPass) => {
    return bcrypt.compareSync(password, userPass);
}

module.exports = {
    encryptPassword,
    comparePassword
}