const express = require('express');

const homepageRoute = require('./routes/homepage');
const studentInfoRoute = require('./routes/student_info');

const router = express.Router();

router.use('/', homepageRoute);
router.use('/student-info', studentInfoRoute);

module.exports = router;
