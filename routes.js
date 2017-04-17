const express = require('express');

const homepageRoute = require('./routes/homepage');
const studentInfoRoute = require('./routes/student_info');
const managerBoardRoute = require('./routes/manager_board');
const enrollRoute = require('./routes/enroll');
const advisorRoute = require('./routes/advisor');
const loginRoute = require('./routes/login');

const router = express.Router();

router.use('/', homepageRoute);
router.use('/student-info', studentInfoRoute);
router.use('/manager-board', managerBoardRoute);
router.use('/enroll', enrollRoute);
router.use('/advisor', advisorRoute);
router.use('/login', loginRoute);

module.exports = router;
