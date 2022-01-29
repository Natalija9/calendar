const User = require('../models/users');


const getAllUsers = async () => {
  const users = await User.find({}).exec();
  return users;
};

module.exports = {
    getAllUsers
}
