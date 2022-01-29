const usersService = require('../services/users');

const getAllUsers = async (req, res, next) => {
    try {
        const allUsers = await usersService.getAllUsers();
        res.status(200).json(allUsers);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllUsers
}