const router = require("express").Router();
const mongoose = require("mongoose");
const Appt = require("../../models/Appt");

// -------------------- CREATE NEW APPT -------------------- //
router.post("/new", (req, res, next) => {
    const appt = new Appt({
        _id: new mongoose.Types.ObjectId(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        dateCreated: req.body.dateCreated,
        dateSelected: req.body.dateSelected,
        timeSelected: req.body.timeSelected,
        status: req.body.status
    });
    appt
    .save()
    .then(results => {
        console.log(results);
        res.status(201).json({ message: "Appointment Created!"})
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({ error: err })
    });
});


module.exports = router;
