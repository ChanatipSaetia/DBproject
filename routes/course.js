const express = require('express');
const router = express.Router();
const db = require('../db');
const moment = require('moment');

let baseSQL = `SELECT C.course_no,C.name_en,C.name_th,C.shortname,C.credit,C.subcredit_1,C.subcredit_2,C.subcredit_3,
C.course_detail,C.special_type,D.name_th AS dname_th, F.name_th AS fname_th, PR.pre_course_no, special_type FROM course C
INNER JOIN department D ON C.did = D.did INNER JOIN faculty F ON D.fid = F.fid
LEFT OUTER JOIN course_prerequisite PR ON C.course_no = PR.course_no `;
let limit = "LIMIT 14 ";

router.get('/', function(req, res) {
  const courseID = req.query.cid;
  const courseName = req.query.shortname;
  if(courseID && courseID.length > 0 && courseName && courseName.length > 0){
    let sql =  baseSQL + "WHERE C.course_no LIKE ? AND shortname LIKE ? "+limit;
    let inserts = ['%' + courseID.trim() + '%', '%' + courseName.trim() + '%'];
    db.query(sql, inserts,
      (err, rows) => {
        if (err) {
          return next(err);
        }
        console.log(rows);
        res.render('course', {
          searched: true,
          moment: moment,
          serverTime: moment().format('LLLL'),
          data: rows,
          user: req.user
        });
      }
    );
  } else if(courseID && courseID.length > 0 && !courseName){
    let sql = baseSQL + "WHERE C.course_no LIKE ?"+limit;
    let inserts = [courseID.trim() + '%'];
    db.query(sql, inserts,
      (err, rows) => {
        if (err) {
          return next(err);
        }
        console.log(rows);
        res.render('course', {
          searched: true,
          moment: moment,
          serverTime: moment().format('LLLL'),
          data: rows,
          user: req.user
        });
      }
    );
  } else if(!courseID && courseName && courseName.length > 0){
    let sql = baseSQL + "WHERE shortname LIKE ?"+limit;
    let inserts = ['%' + courseName.trim() + '%'];
    db.query(sql, inserts,
      (err, rows) => {
        if (err) {
          return next(err);
        }
        console.log(rows);
        res.render('course', {
          searched: true,
          moment: moment,
          serverTime: moment().format('LLLL'),
          data: rows,
          user: req.user
        });
      }
    );
  } else {
    let sql = baseSQL+limit;
    let inserts;
    db.query(sql, inserts,
      (err, rows) => {
        if (err) {
          return next(err);
        }
        console.log(rows);
        res.render('course', {
          searched: true,
          moment: moment,
          serverTime: moment().format('LLLL'),
          data: rows,
          user: req.user
        });
      }
    );
  }
});

router.post('/detail', function(req, res) {
  let course_no = req.body.course_no
  let sql =  baseSQL+"where C.course_no = ? ";
  let inserts = [course_no];
  db.query(sql, inserts,
    (err, rows) => {
      if (err) {
        return next(err);
      }
      res.send(rows[0])
    }
  );
})

module.exports = router;
