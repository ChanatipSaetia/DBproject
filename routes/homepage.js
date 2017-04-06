const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.render('homepage', { title: 'Express' });
});

module.exports = router;
