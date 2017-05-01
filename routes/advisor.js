const express = require('express');
const db = require('../db');
const { queryAsPromise } = require('../db-helper');
const moment = require('moment');

const router = express.Router();

router.get('/', function (req, res, next) {

  var stu = `SELECT *
      FROM (SELECT sid,fname_th,lname_th,fname_en,lname_en,initial_name,ent_year,behav_score,mid FROM student) AAA
      NATURAL JOIN (SELECT user_id,student_sid as 'sid' FROM user_student_advice) BBB
      NATURAL JOIN (SELECT mid,did,name_th as 'm_name' FROM major) CCC
      NATURAL JOIN (SELECT did,fid,name_th as 'd_name' FROM department) DDD
      NATURAL JOIN (SELECT fid,name_th as 'f_name' FROM faculty) EEE`;
  var absent =`SELECT *
      FROM (SELECT sid,fname_th,lname_th,ent_year FROM student) AAA
      NATURAL JOIN (SELECT user_id,student_sid as 'sid' FROM user_student_advice) BBB
      NATURAL JOIN (SELECT sid,arid FROM absent_record_has_student) CCC
      NATURAL JOIN (SELECT arid,start_date,end_date,name as cause,description FROM absent_record) DDD WHERE user_id = ? AND start_date <= CURDATE() AND end_date >= CURDATE()`; 
  var p_absent =`SELECT *
      FROM (SELECT sid,fname_th,lname_th,ent_year FROM student) AAA
      NATURAL JOIN (SELECT user_id,student_sid as 'sid' FROM user_student_advice) BBB
      NATURAL JOIN (SELECT sid,arid FROM absent_record_has_student) CCC
      NATURAL JOIN (SELECT arid,start_date,end_date,name as cause,description FROM absent_record) DDD WHERE user_id = ? AND end_date < CURDATE()`; 
  var all = stu + ` WHERE user_id = ?`;
  var yyy = new Date().getFullYear() + Math.floor(new Date().getMonth()/12 + 4/12);
  var yr1 = all + ` AND `+ yyy +` - ent_year = 1`;
  var yr2 = all + ` AND `+ yyy +` - ent_year = 2`;
  var yr3 = all + ` AND `+ yyy +` - ent_year = 3`;
  var yr4 = all + ` AND `+ yyy +` - ent_year = 4`;
  var yr5 = all + ` AND `+ yyy +` - ent_year = 5`;
  Promise.all([
    queryAsPromise(all, [req.user.id]),
    queryAsPromise(absent, [req.user.id]),
    queryAsPromise(yr1, [req.user.id]),
    queryAsPromise(yr2, [req.user.id]),
    queryAsPromise(yr3, [req.user.id]),
    queryAsPromise(yr4, [req.user.id]),
    queryAsPromise(yr5, [req.user.id]),
    queryAsPromise(p_absent, [req.user.id]),
  ]).then((results) => {
    res.render('advisor', {
      tab1: results[0].rows, 
      total1: results[0].rows.length,
      tab2: results[1].rows,
      total2: results[1].rows.length,
      tab3: results[7].rows,
      total3: results[7].rows.length,
      y1: results[2].rows.length,
      y2: results[3].rows.length,
      y3: results[4].rows.length,
      y4: results[5].rows.length,
      y5: results[6].rows.length,
      moment: moment,
      user: req.user
    })
  }).catch(err => next(err));

});

module.exports = router;
