const router = require('express').Router();
const userRoutes = require("./userRoute");
const apptRoutes = require("./apptRoute");


router.use("/users", userRoutes);
router.use("/appointments", apptRoutes);


module.exports = router;