const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.render('course', {
    user: req.user
  });
});

module.exports = router;
