const { Appt } = require('../models');

const createAppt = async (data) => {
    const apptData = await Appt.create(data)
    return apptData;
}

module.exports = { createAppt }