const express = require('express');
const db = require('../db');

const router = express.Router();

router.get('/', function (req, res, next) {
  const studentID = req.query.sid;
  const studentFirstName = req.query.sfname;
  const studentLastName = req.query.slname;

  if ((studentID && studentID.length > 0) || (studentFirstName && studentFirstName.length > 0) || (studentLastName && studentLastName.length > 0)) {
    var sql = "SELECT * FROM `student` WHERE `id` LIKE ? AND `firstname` LIKE ? AND `lastname` LIKE ?";
    var inserts = ['%'+studentID.trim()+'%', '%'+studentFirstName.trim()+'%', '%'+studentLastName.trim()+'%'];
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
          data: rows
        });
      }
    );
  } else {
    res.render('student_info', { searched: false });
  }
});

module.exports = router;
