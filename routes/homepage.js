const express = require('express');
const moment = require('moment');
const passport = require('passport');
const router = express.Router();

router.get('/', function(req, res) {
  console.log(req.isAuthenticated());
  if (req.isAuthenticated())
    res.redirect('/student-info')
  else
    res.redirect('/login')
});

module.exports = router;
