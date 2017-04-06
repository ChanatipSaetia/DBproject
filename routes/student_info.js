const express = require('express');
const db = require('../db');

const router = express.Router();

router.get('/', function (req, res, next) {
  const studentID = req.query.sid;

  if (studentID && studentID.length > 0) {
    db.query(
      'SELECT * FROM `student` WHERE `id` = ?',
      [studentID.trim()],
      (err, rows) => {
        if (err) {
          return next(err);
        }
        console.log(rows);
        res.render('student_info', {
          searched: true,
          total: rows.length,
          sid: studentID,
          data: rows
        });
      }
    );
  } else {
    res.render('student_info', { searched: false });
  }
});

module.exports = router;
