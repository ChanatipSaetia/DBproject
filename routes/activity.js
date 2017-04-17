const express = require('express');
const moment = require('moment');
const db = require('../db');

const router = express.Router();

router.get('/', function (req, res, next) {
  const studentID = req.query.sid;

   if (studentID && studentID.length > 0) {
    let sql = "SELECT * FROM student JOIN student_activity_join ON student.sid = student_activity_join.sid JOIN activity ON student_activity_join.aid = activity.aid WHERE ? = student.sid";
    let inserts = [studentID.trim()];
    db.query(sql, inserts,
      (err, rows) => {
        if (err) {
          return next(err);
        }
        console.log(rows);
        res.render('activity', {
          searched: true,
          total: rows.length,
          sid: studentID,
          data: rows,
          moment: moment
        });
      }
    );
  } else {
    res.render('activity', { searched: false });
  }
});

module.exports = router;
