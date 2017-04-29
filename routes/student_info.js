const express = require('express');
const moment = require('moment');
const db = require('../db');
const dbHelper = require('../db-helper');

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
    let inserts = ['%' + studentID.trim() + '%', '%' + studentFirstName.trim() + '%', '%' + studentLastName.trim() + '%', '%' + studentAddress + '%'];
    if (studentYear && studentYear.length > 0) {
      sql += "AND ent_year = ? ";
      inserts.push(currentYear - studentYear + 1);
    }
    if (studentBehaviorScore && studentBehaviorScore.length > 0 && scoreConstrain != "") {
      if (scoreConstrain == ">") sql += "AND behav_score > ? ";
      else if (scoreConstrain == "<") sql += "AND behav_score < ? ";
      else if (scoreConstrain == "=") sql += "AND behav_score = ? ";

      inserts.push(studentBehaviorScore);
    }
    if (studentMajorID && studentMajorID.length > 0) {
      sql += "AND mid = ? ";
      inserts.push(studentMajorID);
    }
    db.query(sql, inserts,
      (err, rows) => {
        if (err) {
          return next(err);
        }
        console.log(rows);
        res.render('student_info/main', {
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
          moment: moment,
          user: req.user
        });
      }
    );
  } else {
    res.render('student_info/main', { searched: false, user: req.user });
  }
});

router.get('/:sid', function (req, res) {
  res.render('student_info/full_info', {
    sid: req.params.sid,
    user: req.user,
    studentInfo: {
      fname_th: 'กษิดิศ',
      fname_en: 'Kasidit',
      lname_th: 'เอี่ยมทอง',
      lname_en: 'Iamthong',
    }
  });
})

router.get('/:sid/enroll', function (req, res) {
  res.render('student_info/enrollment', {
    sid: req.params.sid,
    user: req.user,
    studentInfo: {
      fname_th: 'กษิดิศ',
      fname_en: 'Kasidit',
      lname_th: 'เอี่ยมทอง',
      lname_en: 'Iamthong',
    }
  });
});

router.get('/:sid/indiv-activity', function (req, res, next) {
  const studentID = req.params.sid;

  if (studentID && studentID.length > 0) {
    let sql = "SELECT activity.aid, activity.name, activity.start_date, activity.duration, student_activity_awarded.award FROM student JOIN student_activity_join ON student.sid = student_activity_join.sid JOIN activity ON student_activity_join.aid = activity.aid LEFT JOIN student_activity_awarded ON student_activity_awarded.sid = student.sid AND student_activity_awarded.aid = activity.aid WHERE ? = student.sid";
    let inserts = [studentID.trim()];
    db.query(sql, inserts,
      (err, rows) => {
        if (err) {
          return next(err);
        }
        console.log(rows);
        res.render('student_info/indiv_activity', {
          searched: true,
          total: rows.length,
          sid: studentID,
          data: rows,
          moment: moment,
          user: req.user,
          studentInfo: {
            fname_th: 'กษิดิศ',
            fname_en: 'Kasidit',
            lname_th: 'เอี่ยมทอง',
            lname_en: 'Iamthong',
          }
        });
      }
    );
  } else {
    res.render('common/not_found');
  }
});

router.get('/:sid/studying-analysis', function (req, res) {
  const passedCourseDetail = [
    { courseNo: '2110327', courseName: 'ALGORITHM DESIGN', credit: 3, grade: 'D' },
    { courseNo: '2110352', courseName: 'COMP SYS ARCH', credit: 3, grade: 'B' },
    { courseNo: '2110363', courseName: 'HW SYN LAB I', credit: 1, grade: 'A' },
    { courseNo: '2110391', courseName: 'INDIV COMP III', credit: 1, grade: 'A' },
    { courseNo: '2110482', courseName: 'HIGH TECH ENT', credit: 3, grade: 'B+' },
    { courseNo: '2200226', courseName: 'FOLK MUS TH SOC', credit: 3, grade: 'A' }
  ];
  const remainedCourseDetail = [
    { courseNo: '2110313', courseName: 'OS SYS PROG', credit: 3, grade: 'W', status: 'danger' },
    { courseNo: '2110316', courseName: 'PROG LANG PRIN', credit: 3, grade: 'F', status: 'danger' },
    { courseNo: '2110318', courseName: 'DIS SYS ESSEN', credit: 3, grade: '-', status: 'normal' },
    { courseNo: '2110332', courseName: 'SYS ANALYSIS DSGN', credit: 3, grade: '-', status: 'normal' },
    { courseNo: '2110352', courseName: 'COMP SYS ARCH', credit: 3, grade: '-', status: 'normal' },
    { courseNo: '2110355', courseName: 'FORM LANG/AUTO', credit: 3, grade: '-', status: 'normal' },
    { courseNo: '2110422', courseName: 'DB MGT SYS DESIGN', credit: 3, grade: '-', status: 'normal' }
  ];
  res.render('student_info/studying_analysis', {
    sid: req.params.sid,
    passedCourseDetail, remainedCourseDetail,
    user: req.user,
    studentInfo: {
      fname_th: 'กษิดิศ',
      fname_en: 'Kasidit',
      lname_th: 'เอี่ยมทอง',
      lname_en: 'Iamthong',
    }
  });
})

module.exports = router;
