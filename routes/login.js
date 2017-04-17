const express = require('express');
const moment = require('moment');
const router = express.Router();

router.get('/', function(req, res) {
  res.render('login', {
    serverTime: moment().format('LLLL')
  });
});

module.exports = router;
