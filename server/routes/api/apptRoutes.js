const router = require('express').Router();
const { createAppt, getAllAppts } = require('../../controllers/apptController');

router.get('/', getAllAppts)

// USER MAKES THE APPOINTMENT
router.post("/", async (req, res) => {
    try {
        console.log('APPT ROUTE REQ PARAMETER', req)
        const apptData = await createAppt(req.body)
        res.status(200).json(apptData)
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
});

module.exports = router;