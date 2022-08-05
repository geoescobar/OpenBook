const router = require('express').Router();
const { createAppt, getAllAppts } = require('../../controllers/apptController');
// const { verifyUser } = require('../../utils/auth');

// create
// phoneNumber not added in req.body
// phoneNumber is added in payload

// I'M MISSING THE createAppt FUNCTION, WHERE DO I PUT IT?
// I THINK I NEED TO MOVE SOME STUFF TO controllers
router.get('/', getAllAppts)

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

// APPROVE/DENY, NEEDS if statment ADDED. NEED auth FUNCTION FROM auth.js
// router.put("/", async (req, res) => {
//     if (isAuth && reqId === apptOwnerId) {

//         try {
//             const apptData = await updateAppt({
//                 where: {
//                     id: req.params.id,
//                 }
//             })
//             res.status(200).json(apptData)

//         } catch (error) {
//             res.status(500).json(error)
//         }
// } else {
//     res.status(401).send("User unauthorized to make appt.")
// }



// })

// ALL I WANT ARE THE ROUTES, NOT THE CONTROLLERS, SOME STUFF NEEDS TO GET MOVED TO THE controllers FILE.
// router.delete('/:id', async (req, res) => {
//     try {
//         const apptData = await deleteAppt(req.params.id);
//         res.status(200).json(apptData, { message: 'File Deleted' })
//     } catch (error) {
//         res.status(405).json(error, {
//             message: "Unable to delete"
//         })
//     }
// })
//
// THIS IS WHAT I WANT IT TO LOOK LIKE IN THE END.
// // someone creates the appointment
// router.post("/", createAppt);
// // admin appoves/denies appt
// router.put("/:id", updateAppt);
// // admin can delete an appt or upon denial
// router.delete("/:id", deleteAppt);
// // get one appointment
// router.get("/:id", getAppt);
// // get all appointments
// router.get("/", getAppts);



module.exports = router;