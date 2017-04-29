const express = require('express');
const { requireLogin, requireLogout, requireLoginNoWarning } = require('./routes/helper/common-middleware');

const loginRoute = require('./routes/login');
const homepageRoute = require('./routes/homepage');
const studentInfoRoute = require('./routes/student_info');
const activityRoute = require('./routes/indiv_activity');
const managerBoardRoute = require('./routes/manager_board');
const enrollRoute = require('./routes/enroll');
const advisorRoute = require('./routes/advisor');
const courseRoute = require('./routes/course');
const aboutRoute = require('./routes/about');

const router = express.Router();

router.use('/login', requireLogout, loginRoute);
router.get('/logout', (req, res) => {
  req.logOut();
  res.redirect('/login');
});

router.use('/', requireLoginNoWarning, homepageRoute);
router.use('/student-info', requireLogin, studentInfoRoute);
router.use('/indiv-activity', requireLogin, activityRoute);
router.use('/manager-board', requireLogin, managerBoardRoute);
router.use('/enroll', requireLogin, enrollRoute);
router.use('/advisor', requireLogin, advisorRoute);
router.use('/course', requireLogin, courseRoute);
router.use('/about', requireLogin, aboutRoute);

module.exports = router;
