const router = require('express').Router();
const { getUsers, createUser } = require('../../controllers/userController');

router.post("/", async (req, res) => {
    try {
        const userData = await createUser(req.body)
        res.status(200).json(userData)
    } catch (error) {
        res.status(500).json(error);
    }
})

router.get("/", async (req, res) => {
    try {
        const userData = await getUsers()
        res.status(200).json(userData)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)

    }
})

module.exports = router;