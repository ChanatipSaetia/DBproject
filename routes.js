const express = require('express');

const homepageRoute = require('./routes/homepage');
const studentInfoRoute = require('./routes/student_info');
const activityRoute = require('./routes/indiv_activity');
const managerBoardRoute = require('./routes/manager_board');
const enrollRoute = require('./routes/enroll');
const advisorRoute = require('./routes/advisor');
const courseRoute = require('./routes/course');
const loginRoute = require('./routes/login');
const aboutRoute = require('./routes/about');

const router = express.Router();

router.use('/', homepageRoute);
router.use('/student-info', studentInfoRoute);
router.use('/indiv-activity', activityRoute);
router.use('/manager-board', managerBoardRoute);
router.use('/enroll', enrollRoute);
router.use('/advisor', advisorRoute);
router.use('/course',courseRoute);
router.use('/login', loginRoute);
router.get('/logout', (req, res) => {
  req.logOut();
  res.redirect('/login');
});
router.use('/about', aboutRoute);

module.exports = router;
