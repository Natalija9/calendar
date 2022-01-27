const mongoose = require('mongoose');
const Meeting = require('../models/meetings');


const getAllMeetings = async () => {
  const meetings = await Meeting.find({}).exec();
  return meetings;
};

const getMeetingById = async (id) => {
    const meeting = await Meeting.findOne({ meeting_id: id}).exec();
    return meeting;
};

const getMeetingsByDate = async (date) => {
  const meetings = await Meeting.find({ date: date}).exec();
  return meetings;
};

const createNewMeeting = async (meeting_id, title, description, time, date, participants) => {
    const newMeeting = new Meeting({
        meeting_id,
        title,
        description,
        time,
        date,
        participants
      
  });
  
  await newMeeting.save();
  return newMeeting;
}

const deleteMeeting = async (id) => {
  await Meeting.findOneAndDelete({ meeting_id: id }).exec();
}

module.exports = {
    getAllMeetings,
    getMeetingById,
    getMeetingsByDate,
    createNewMeeting,
    deleteMeeting
}
