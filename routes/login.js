const express = require('express');
const moment = require('moment');
const passport = require('passport');
const router = express.Router();

router.get('/', function(req, res) {
  res.render('login', {
    serverTime: moment().format('LLLL')
  });
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  passport.authenticate('local-login', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.redirect('/login'); }
    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }
      return res.redirect('/');
    });
  })(req, res, next);
});

module.exports = router;
