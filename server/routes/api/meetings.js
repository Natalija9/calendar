const express = require('express');
const meetingsController = require('../../controllers/meetings');

const router = express.Router();

router.get('/', meetingsController.getAllMeetings);
router.get('/:meeting_id', meetingsController.getMeetingById);
router.get('/date/:date', meetingsController.getMeetingsByDate);


router.post('/new', meetingsController.createNewMeeting);
router.delete('/:meeting_id', meetingsController.deleteMeeting);

module.exports = router;
