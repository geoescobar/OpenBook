const { User } = require('../models');

// CREATE
const createUser = async (req, res) => {
    const userData = await User.create(req.body)
    return userData;
}

// READ
const getUsers = async (req, res) => {
    const userData = await User.find()
    return userData;
}

// UPDATE
const updateUser = async (req, res) => {
    const userData = await User.findOneAndUpdate({
        where: {
            id: req.params.id
        }
    })
    return userData;
}

// DELETE
const removeUser = async (req, res) => {
    const userData = await User.findOneAndDelete({
        where: {
            id: req.params.id
        }
    })
    return userData
}

module.exports = { createUser, getUsers, updateUser, removeUser }
