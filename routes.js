const express = require('express');

const homepageRoute = require('./routes/homepage');
const studentInfoRoute = require('./routes/student_info');
const activityRoute = require('./routes/activity');
const managerBoardRoute = require('./routes/manager_board');
const enrollRoute = require('./routes/enroll');
const advisorRoute = require('./routes/advisor');
const courseRoute = require('./routes/course')
const loginRoute = require('./routes/login');

const router = express.Router();

router.use('/', homepageRoute);
router.use('/student-info', studentInfoRoute);
router.use('/activity', activityRoute);
router.use('/manager-board', managerBoardRoute);
router.use('/enroll', enrollRoute);
router.use('/advisor', advisorRoute);
router.use('/course',courseRoute);
router.use('/login', loginRoute);

module.exports = router;
