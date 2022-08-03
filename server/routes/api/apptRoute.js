const router = require("express").Router();
const mongoose = require("mongoose");
const Appt = require("../../models/Appt");

// -------------------- CREATE NEW APPT -------------------- //
router.post("/new", (req, res) => {
    const appt = new Appt({
        _id: new mongoose.Types.ObjectId(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        dateCreated: req.body.dateCreated,
        appointmentDate: req.body.appointmentDate,
        appointmentTime: req.body.appointmentTime,
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

router.get("/", (req, res) => {
    try {
        
    } catch (err) {

    }
})


module.exports = router;
