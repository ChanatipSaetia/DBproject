const express = require('express');

const router = express.Router();

router.get('/', function (req, res) {
  res.redirect('/student-info');
});

module.exports = router;
