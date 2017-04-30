const express = require('express');
const moment = require('moment');
const db = require('../db');
const { queryAsPromise } = require('../db-helper');
const { buildDataTableEndpoint } = require('./helper/data-table-helper');

const router = express.Router();

router.get('/', function (req, res) {
  // It comes from <input type="hidden" ...>
  if (req.query.search === 'y') {
    const searchOptions = {
      sid: req.query.sid,
      sfname: req.query.sfname,
      slname: req.query.slname,
      student_year: req.query.student_year,
      score_constrain: req.query.score_constrain,
      behav_score: req.query.behav_score,
      mid: req.query.mid,
      address_en: req.query.address_en
    };

    res.render('student_info/main', {
      searched: true,
      searchOptions: searchOptions,
      user: req.user
    });
  } else {
    res.render('student_info/main', {
      searched: false,
      user: req.user
    });
  }
});

router.get('/search-data', buildDataTableEndpoint((queryOptions) => {
  const { start, length, sortOptions, additionalOptions } = queryOptions;

  // prepare for actual query

  const studentID = additionalOptions.sid;
  const studentFirstName = additionalOptions.sfname;
  const studentLastName = additionalOptions.slname;
  const studentYear = additionalOptions.student_year;
  const scoreConstrain = additionalOptions.score_constrain;
  const studentBehaviorScore = additionalOptions.behav_score;
  const studentMajorID = additionalOptions.mid;
  const studentAddress = additionalOptions.address_en;
  const currentYear = moment().year();

  // all like
  let baseSQL = "FROM student WHERE sid LIKE ? AND fname_en LIKE ? AND lname_en LIKE ? AND address_en LIKE ? ";
  let queryData = ['%' + studentID.trim() + '%', '%' + studentFirstName.trim() + '%', '%' + studentLastName.trim() + '%', '%' + studentAddress + '%'];
  if (studentYear && studentYear.length > 0) {
    baseSQL += "AND ent_year = ? ";
    queryData.push(currentYear - studentYear + 1);
  }
  if (studentBehaviorScore && studentBehaviorScore.length > 0 && scoreConstrain != "") {
    if (scoreConstrain == ">") baseSQL += "AND behav_score > ? ";
    else if (scoreConstrain == "<") baseSQL += "AND behav_score < ? ";
    else if (scoreConstrain == "=") baseSQL += "AND behav_score = ? ";

    queryData.push(studentBehaviorScore);
  }
  if (studentMajorID && studentMajorID.length > 0) {
    baseSQL += "AND mid = ? ";
    queryData.push(studentMajorID);
  }

  // we use `dataSQL` to query by using data table's information to limit and sort
  let dataSQL = 'SELECT * ' + baseSQL;
  if (sortOptions) {
    let dbFieldName = sortOptions.fieldName;
    if (dbFieldName === 'year') {
      dbFieldName = 'ent_year';
    } else if (dbFieldName === 'behaviorScore') {
      dbFieldName = 'behav_score';
    }

    dataSQL += ` ORDER BY ${dbFieldName} ${sortOptions.isAscending ? 'ASC' : 'DESC'}`;
  }
  dataSQL += ` LIMIT ${length} OFFSET ${start}`;

  // for `countFilteredSQL`, we just want to count the number of data that is filtered above
  const countFilteredSQL = 'SELECT COUNT(*) as filteredStudentCount ' + baseSQL;

  // for `countAllSQL`, we want to count "all" data in the table before filtered
  const countAllSQL = 'SELECT COUNT(*) as totalStudentCount FROM student';

  return Promise.all([
    queryAsPromise(countAllSQL),
    queryAsPromise(countFilteredSQL, queryData),
    queryAsPromise(dataSQL, queryData)
  ]).then(results => {
    const totalCount = results[0].rows[0].totalStudentCount;
    const filteredCount = results[1].rows[0].filteredStudentCount;
    const data = results[2].rows.map(row => {
      return {
        sid: row.sid,
        fname_en: row.fname_en,
        lname_en: row.lname_en,
        year: row.ent_year,
        behaviorScore: row.behav_score
      };
    });

    return { totalCount, filteredCount, data };
  });
}));

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
    let sql = "SELECT YEAR(activity.start_date) as 'year', sum(activity.duration) as 'sum', activity.aid, activity.name, activity.start_date, activity.duration, student_activity_awarded.award FROM student JOIN student_activity_join ON student.sid = student_activity_join.sid JOIN activity ON student_activity_join.aid = activity.aid LEFT JOIN student_activity_awarded ON student_activity_awarded.sid = student.sid AND student_activity_awarded.aid = activity.aid WHERE ? = student.sid group by YEAR(activity.start_date)";
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
