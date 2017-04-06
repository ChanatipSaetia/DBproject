const express = require('express');

const homepageRoute = require('./routes/homepage');
const userRoute = require('./routes/users');

const router = express.Router();

router.use(homepageRoute);
router.use(userRoute);

module.exports = router;
