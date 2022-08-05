const { Appt } = require('../models');

const apptControllers = {
    async createAppt(req, res) {
        console.log('CREATE APPT REQ PARAM', req)
        const { firstName, lastName, email, dateSelected, timeSelected } = req;
        if (!firstName || !lastName || !email || !dateSelected || !timeSelected) {
            return res.status(412).json({
                message: 'Something required is missing.'
            });
        }


        const apptData = await Appt.create(req);
        return apptData;
    },

    async getAllAppts(req, res) {

        const apptData = await Appt.find({})
        res.json(apptData);
    },

    async updateAppt(req, res) {
        try {
            const apptUpdate = Appt.findByIdAndUpdate(
                req.params.id,
                { $set: req.body },
                { new: true }
            );
            res.status(200).json(apptUpdate);
        } catch (error) {
            res.status(403).json(error, { message: 'Could not update' })
        }
    }

}

module.exports = apptControllers;