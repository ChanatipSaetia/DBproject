const express = require('express');

const indexRoute = require('./routes/index');
const userRoute = require('./routes/users');

const router = express.Router();

router.use(indexRoute);
router.use(userRoute);

module.exports = router;
