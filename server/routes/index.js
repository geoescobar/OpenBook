const router = require('express').Router();
const userRoutes = require('./api/userRoutes');
const apptRoutes = require('./api/apptRoutes');


router.use('/api/users', userRoutes);

router.use('/appointment', apptRoutes);

module.exports = router;