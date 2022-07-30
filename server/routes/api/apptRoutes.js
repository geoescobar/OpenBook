const router = require('express').Router();
const { createAppt } = require('../../controllers/apptController');

router.post("/", async (req, res) => {
    try {
        console.log(req.body)
        const apptData = await createAppt(req.body)
        res.status(200).json(apptData)
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
})

module.exports = router;