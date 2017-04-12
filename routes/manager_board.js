const express = require('express');
const db = require('../db');

const router = express.Router();

router.get('/', function (req, res, next) {
  res.render('manager_board');
});

module.exports = router;
