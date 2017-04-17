const express = require('express');
const moment = require('moment');
const db = require('../db');

const router = express.Router();

router.get('/', function (req, res, next) {
  const studentID = req.query.sid;
  const activityID = req.query.aid;

   if (studentID && studentID.length > 0 && activityID && activityID.length > 0) {
    let sql = "SELECT activity.aid, activity.name, activity.start_date, activity.duration, student_activity_awarded.award FROM student JOIN student_activity_join ON student.sid = student_activity_join.sid JOIN activity ON student_activity_join.aid = activity.aid LEFT JOIN student_activity_awarded ON student_activity_awarded.sid = student.sid AND student_activity_awarded.aid = activity.aid WHERE ? = student.sid AND ? LIKE activity.aid";
    let inserts = [studentID.trim(), activityID.trim()];
    db.query(sql, inserts,
      (err, rows) => {
        if (err) {
          return next(err);
        }
        console.log(rows);
        res.render('activity', {
          searched: true,
          type: 1,
          total: rows.length,
          sid: studentID,
          aid: activityID,
          data: rows,
          moment: moment
        });
      }
    );
  } 
   else if (studentID && studentID.length > 0 && activityID.length == 0) {
    let sql = "SELECT activity.aid, activity.name, activity.start_date, activity.duration, student_activity_awarded.award FROM student JOIN student_activity_join ON student.sid = student_activity_join.sid JOIN activity ON student_activity_join.aid = activity.aid LEFT JOIN student_activity_awarded ON student_activity_awarded.sid = student.sid AND student_activity_awarded.aid = activity.aid WHERE ? = student.sid";
    let inserts = [studentID.trim()];
    db.query(sql, inserts,
      (err, rows) => {
        if (err) {
          return next(err);
        }
        console.log(rows);
        res.render('activity', {
          searched: true,
          type: 1,
          total: rows.length,
          sid: studentID,
          data: rows,
          moment: moment
        });
      }
    );
  }
   else if (activityID && activityID.length > 0) {
    let sql = "SELECT student.sid, activity.aid, activity.name, activity.start_date, activity.duration FROM student JOIN student_activity_join ON student.sid = student_activity_join.sid JOIN activity ON student_activity_join.aid = activity.aid WHERE ? = activity.aid";
    let inserts = [activityID.trim()];
    db.query(sql, inserts,
      (err, rows) => {
        if (err) {
          return next(err);
        }
        console.log(rows);
        res.render('activity', {
          searched: true,
          type: 2,
          total: rows.length,
          aid: activityID,
          data: rows,
          moment: moment
        });
      }
    );
  }
  else {
    res.render('activity', { searched: false });
  }
});

module.exports = router;
