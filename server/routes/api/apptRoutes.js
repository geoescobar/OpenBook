const router = require('express').Router();
const { createAppt, updateAppt } = require('../../controllers/apptController');

// create
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

// approve or deny appointment
router.put("/", async (req, res) => {
    // if(isAuth && reqId === apptOwnerId) {
    try {
        const apptData = await updateAppt({
            where: {
                id: req.params._id
            }
        })
        res.status(200).json(apptData)

    } catch (error) {
        res.status(500).json(error)
    }
    // } else {
    //     res.status(401).send("User unauthorized to make appt.")
    // }


})

module.exports = router;