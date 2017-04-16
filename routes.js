const express = require('express');

const homepageRoute = require('./routes/homepage');
const studentInfoRoute = require('./routes/student_info');
const activityRoute = require('./routes/activity');
const managerBoardRoute = require('./routes/manager_board');
const enrollRoute = require('./routes/enroll');

const router = express.Router();

router.use('/', homepageRoute);
router.use('/student-info', studentInfoRoute);
router.use('/activity', activityRoute);
router.use('/manager-board', managerBoardRoute);
router.use('/enroll', enrollRoute);

module.exports = router;
