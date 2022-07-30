const { Appt } = require('../models');

const createAppt = async (data) => {
    const apptData = await Appt.create(data);
    return apptData;
}

// approve or deny
const updateAppt = async (data) => {
    const apptData = await Appt.findOneAndUpdate(data);
    return apptData;
}
// would this be the appt denial??
const deleteAppt = async (data) => {
    const apptData = await Appt.findByIdAndDelete(data);
    return apptData;
}

module.exports = { createAppt, updateAppt }