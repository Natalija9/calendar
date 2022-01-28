const meetingsService = require('../services/meetings');

const getAllMeetings = async (req, res, next) => {
    try {
        const allMeetings = await meetingsService.getAllMeetings();
        res.status(200).json(allMeetings);
    } catch (error) {
        next(error);
    }
};

const getMeetingById = async (req, res, next) => {
    const id = req.params.id;

    try {
        if (id === undefined) {
            const error = new Error('Meeting id missing');
            error.status = 400;
            throw error;
        }

        const data = await meetingsService.getMeetingById(id);
        if (data === null) {
            res.status(404).json();
        } else {
            res.status(200).json(data);
        }
    } catch (error) {
        next(error);
    }
};

const getMeetingsByDate = async (req, res, next) => {
    const date = req.params.date;

    try {
        const meetings = await meetingsService.getMeetingsByDate(date);
        res.status(200).json(meetings);
    } catch (error) {
        next(errot);
    }
};

const createNewMeeting = async (req, res, next) => {
    const { title, description, time, date, participants} = req.body;

    try {
        if (!title ||
            !description ||
            !time ||
            !date ||
            !participants
        ) {
            const error = new Error('Invalid input');
            error.status = 400;
            throw error;
        }

        const newMeeting = await meetingsService.createNewMeeting(
            title, description, time, date, participants
        );
        res.status(201).json(newMeeting);
    } catch (error) {
        next(error);
    }

};

const deleteMeeting = async (req, res, next) => {
    const id = req.params.id;

    try {
        if (!id) {
            const error = new Error('Meeting id missing');
            error.status = 400;
            throw error;
        }

        const meeting = await meetingsService.getMeetingById(id);
        if (!meeting) {
            const error = new Error('Invalid meeting id');
            error.status = 404;
            throw error;
        }

        await meetingsService.deleteMeeting(id);
        res.status(200).json();
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllMeetings,
    getMeetingById,
    getMeetingsByDate,
    createNewMeeting,
    deleteMeeting
}
