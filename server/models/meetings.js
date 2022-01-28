const mongoose = require('mongoose');

const meetingSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    title: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    description: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    time: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    date: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    participants: [mongoose.Schema.Types.String]
});

const Meeting = mongoose.model('Meeting', meetingSchema);

module.exports = Meeting;
