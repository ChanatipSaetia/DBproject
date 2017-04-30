const express = require('express');
const { requireLogin, requireLogout, requireLoginNoWarning } = require('./routes/helper/common-middleware');

const loginRoute = require('./routes/login');
const studentInfoRoute = require('./routes/student_info');
const managerBoardRoute = require('./routes/manager_board');
const advisorRoute = require('./routes/advisor');
const courseRoute = require('./routes/course');
const aboutRoute = require('./routes/about');

const router = express.Router();

router.use('/login', requireLogout, loginRoute);
router.get('/logout', (req, res) => {
  req.logOut();
  res.redirect('/login');
});

router.use('/student-info', requireLogin, studentInfoRoute);
router.use('/manager-board', requireLogin, managerBoardRoute);
router.use('/advisor', requireLogin, advisorRoute);
router.use('/course', requireLogin, courseRoute);
router.use('/about', requireLogin, aboutRoute);

// We use this trick to show login warning only if user does not come from '/' URL.
router.get('/', requireLoginNoWarning, (req, res) => res.redirect('/student-info'));
router.use('/', requireLogin);

module.exports = router;
