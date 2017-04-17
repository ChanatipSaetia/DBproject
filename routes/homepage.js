const express = require('express');
const moment = require('moment');
const router = express.Router();

router.get('/', function(req, res) {
  res.redirect('/student-info')
});

module.exports = router;
