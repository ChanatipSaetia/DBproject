const express = require('express');
const moment = require('moment');
const db = require('../db');

const router = express.Router();

router.get('/', function (req, res, next) {
  const studentID = req.query.sid;
  const studentFirstName = req.query.sfname;
  const studentLastName = req.query.slname;
  const studentYear = req.query.student_year;
  const scoreConstrain = req.query.score_constrain;
  const studentBehaviorScore = req.query.behav_score;
  const studentMajorID = req.query.mid;
  const studentAddress = req.query.address_en;
  const currentYear = moment().year();

   if ((studentID && studentID.length > 0) || (studentFirstName && studentFirstName.length > 0) || (studentLastName && studentLastName.length > 0) ||
       (studentYear && studentYear.length > 0) || (studentBehaviorScore && studentBehaviorScore.length > 0 && scoreConstrain != "") || (studentMajorID && studentMajorID.length > 0) ||
       (studentAddress && studentAddress.length > 0)) {
      // all like
      let sql = "SELECT * FROM student WHERE sid LIKE ? AND fname_en LIKE ? AND lname_en LIKE ? AND address_en LIKE ? ";
      let inserts = ['%'+studentID.trim()+'%', '%'+studentFirstName.trim()+'%', '%'+studentLastName.trim()+'%', '%'+studentAddress+'%'];
    if (studentYear && studentYear.length > 0){
        sql += "AND ent_year = ? ";
        inserts.push(currentYear - studentYear + 1);
      }
    if (studentBehaviorScore && studentBehaviorScore.length > 0 && scoreConstrain != ""){
        if(scoreConstrain == ">") sql += "AND behav_score > ? ";
        else if(scoreConstrain == "<") sql += "AND behav_score < ? ";
        else if(scoreConstrain == "=") sql += "AND behav_score = ? ";

        inserts.push(studentBehaviorScore);
    }
    if (studentMajorID && studentMajorID.length > 0){
      sql += "AND mid = ? ";
      inserts.push(studentMajorID);
    }

    db.query(sql, inserts,
      (err, rows) => {
        if (err) {
          return next(err);
        }
        console.log(rows);
        res.render('student_info', {
          searched: true,
          total: rows.length,
          sid: studentID,
          sfname: studentFirstName,
          slname: studentLastName,
          syear: studentYear,
          behav_score: studentBehaviorScore,
          mid: studentMajorID,
          address: studentAddress,
          data: rows,
          moment: moment
        });
      }
    );
  } else {
    res.render('student_info', { searched: false });
  }
});

module.exports = router;
