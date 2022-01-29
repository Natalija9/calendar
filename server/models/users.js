const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: mongoose.Schema.Types.String,
        required: true
    }
});

const User = mongoose.model('User', usersSchema);

module.exports = User;
