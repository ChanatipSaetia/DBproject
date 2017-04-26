const express = require('express');
const moment = require('moment');
const db = require('../db');

const router = express.Router();

router.get('/', function (req, res, next) {
  const studentID = req.query.sid;

  if (studentID && studentID.length > 0) {
    let sql = "SELECT activity.aid, activity.name, activity.start_date, activity.duration, student_activity_awarded.award FROM student JOIN student_activity_join ON student.sid = student_activity_join.sid JOIN activity ON student_activity_join.aid = activity.aid LEFT JOIN student_activity_awarded ON student_activity_awarded.sid = student.sid AND student_activity_awarded.aid = activity.aid WHERE ? = student.sid";
    let inserts = [studentID.trim()];
    db.query(sql, inserts,
      (err, rows) => {
        if (err) {
          return next(err);
        }
        console.log(rows);
          res.render('indiv_activity', {
            searched: true,
            total: rows.length,
            sid: studentID,
            data: rows,
            moment: moment
          });
        }
      );
    }

  else {
    res.render('indiv_activity', { searched: false,user: req.user });
  }
});

module.exports = router;
