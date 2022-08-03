const db = require('../config/connection');
const { User, Appt } = require('../models');
const userData = require("./userData.json");
const apptData = require("./apptData.json");

const seedDb = async () => {
    try {
        await User.deleteMany();
        await User.insertMany(userData);
        await Appt.deleteMany();
        await Appt.insertMany(apptData);
        process.exit();
    } catch (err) {
        console.error(err)
    }
};

seedDb();