const express = require('express');
const db = require('../db');

const router = express.Router();

router.get('/', function (req, res, next) {
  const studentID = req.query.sid;
  const advisorID = "00001";

  var sql = "SELECT * FROM `student` WHERE `aid` LIKE ?";
  var inserts = ['%' + advisorID.trim() + '%'];
  db.query(sql, inserts,
    (err, rows) => {
      if (err) {
        return next(err);
      }
      console.log(rows);
      res.render('advisor', {
        total: rows.length,
        sid: studentID,
        aid: advisorID,
        data: rows
      });
    }
  ); })
  
module.exports = router;
