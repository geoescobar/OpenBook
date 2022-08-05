const router = require('express').Router();
const userRoutes = require('./api/userRoutes');
const apptRoutes = require('./api/apptRoutes');
const authRoutes = require('./api/authRoutes');



router.use('/api/users', userRoutes);

router.use('/auth', authRoutes)

router.use('/appointment', apptRoutes);



module.exports = router;