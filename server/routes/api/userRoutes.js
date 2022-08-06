const router = require('express').Router();
const { getUsers, createUser } = require('../../controllers/userController');

// create
router.post("/", async (req, res) => {
    try {
        const userData = await createUser(req.body)
        res.status(200).json(userData)
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
});
// get all users
router.get("/", async (req, res) => {
    try {
        const userData = await getUsers()
        res.status(200).json(userData)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)

    }
});

module.exports = router;