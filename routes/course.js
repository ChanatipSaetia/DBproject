const express = require('express');
const router = express.Router();
const db = require('../db');
const moment = require('moment');


router.get('/', function(req, res) {
  const courseID = req.query.cid;
  const courseName = req.query.shortname;
  if(courseID && courseID.length > 0 && courseName && courseName.length > 0){
    let sql = "SELECT * FROM course WHERE course_no LIKE ? AND shortname LIKE ? ";
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
          data: rows
        });
      }
    );
  } else if(courseID && courseID.length > 0 && !courseName){
    let sql = "SELECT * FROM course WHERE course_no LIKE ?";
    let inserts = ['%' + courseID.trim() + '%'];
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
          data: rows
        });
      }
    );
  } else if(!courseID && courseName && courseName.length > 0){
    let sql = "SELECT * FROM course WHERE shortname LIKE ?";
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
          data: rows
        });
      }
    );
  } else {
    let sql = "SELECT * FROM course";
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
          data: rows
        });
      }
    );
  }
});

module.exports = router;
