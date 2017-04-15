const express = require('express');

const homepageRoute = require('./routes/homepage');
const studentInfoRoute = require('./routes/student_info');
const enrollRoute = require('./routes/enroll');
const advisorRoute = require('./routes/advisor');

const router = express.Router();

router.use('/', homepageRoute);
router.use('/student-info', studentInfoRoute);
router.use('/enroll', enrollRoute);
router.use('/advisor', advisorRoute);

module.exports = router;
