const express = require('express');
const router = express.Router();
const db = require('../db');
const moment = require('moment');

router.post('/detail', function(req, res) {
  let sql = `SELECT created_time, edited_time, e.course_no, grade, credit, shortname FROM enrollment e inner join course c on e.course_no = c.course_no
  where e.sid = ? AND e.year = ? AND e.semester = ?`;
  let inserts = [req.body.sid, req.body.year, req.body.semester];
  db.query(sql, inserts,
    (err, rows) => {
      if (err) {
        return next(err);
      }
      console.log(rows);
      res.send(rows)
    }
  );
})

router.post('/summary', function(req, res) {
  let ent_year = req.body.ent_year;
  let sql = `SELECT grade, credit, e.year, e.semester FROM enrollment e inner join course c on e.course_no = c.course_no
  where e.sid = ?`;
  let inserts = [req.body.sid];
  db.query(sql, inserts,
    (err, rows) => {
      if (err) {
        return next(err);
      }
      let sum, ca, cg, cax, cgx, gpa, gpax, gpx;
      sum = temp_sum()
      ca = temp_sum()
      cg = temp_sum()
      cax = temp_sum()
      cgx = temp_sum()
      gpa = temp_sum()
      gpax = temp_sum()
      gpx = temp_sum()
      let code_semester = 4;
      let test_semester = [];
      let last_code = ""
      for (var i = 0; i < rows.length; i++) {
        encode_grade = encodeGrade(rows[i].grade)
        console.log(sum[rows[i].year][rows[i].semester]);
        sum[rows[i].year][rows[i].semester] += encode_grade * rows[i].credit
        if(rows[i].grade != "W")
          ca[rows[i].year][rows[i].semester] += rows[i].credit
        if (encode_grade) {
          cg[rows[i].year][rows[i].semester] += rows[i].credit
        }
        gpa[rows[i].year][rows[i].semester] = sum[rows[i].year][rows[i].semester] / ca[rows[i].year][rows[i].semester]
        last_code = encodeSemester(rows[i].year, rows[i].semester, ent_year)
      }
      for (let i = 1; i < last_code;i++){
        console.log(ent_year);
        console.log(i);
        code_semester = decodeSemester(i, ent_year);
        test_semester = decodeSemester(i - 1, ent_year);
        console.log(code_semester);
        console.log(test_semester);
        gpx[code_semester.year][code_semester.semester] = sum[code_semester.year][code_semester.semester] + gpx[test_semester.year][test_semester.semester]
        cgx[code_semester.year][code_semester.semester] = cg[code_semester.year][code_semester.semester] + cgx[test_semester.year][test_semester.semester]
        cax[code_semester.year][code_semester.semester] = ca[code_semester.year][code_semester.semester] + cax[test_semester.year][test_semester.semester]
        gpax[code_semester.year][code_semester.semester] = gpx[code_semester.year][code_semester.semester] / cax[code_semester.year][code_semester.semester]
      }
      let result = {
        ca: ca[req.body.year][req.body.semester],
        cg:cg[req.body.year][req.body.semester],
        cax:cax[req.body.year][req.body.semester],
        cgx:cgx[req.body.year][req.body.semester],
        gpa:gpa[req.body.year][req.body.semester],
        gpax:gpax[req.body.year][req.body.semester],
        gpx:gpx[req.body.year][req.body.semester]
      }
      console.log(result);
      res.send(result)
    }
  );
})

function encodeGrade(grade) {
  if (grade == 'A') {
    return 4;
  } else if (grade == 'B+') {
    return 3.5;
  } else if (grade == 'B') {
    return 3;
  } else if (grade == 'C+') {
    return 2.5;
  } else if (grade == 'C') {
    return 2;
  } else if (grade == 'D+') {
    return 1.5;
  } else if (grade == 'D') {
    return 1;
  } else if (grade == 'F' || grade == 'W') {
    return 0;
  }
}

function temp_sum() {
  return {
    "2011": {
      "1": 0,
      "2": 0
    },
    "2012": {
      "1": 0,
      "2": 0
    },
    "2013": {
      "1": 0,
      "2": 0
    },
    "2014": {
      "1": 0,
      "2": 0
    },
    "2015": {
      "1": 0,
      "2": 0
    },
    "2016": {
      "1": 0,
      "2": 0
    },
  }
}

function decodeSemester(code, ent_year) {
  let semester = code % 2
  if (semester == 0) {
    semester = 2
  }
  let year = (code - semester) / 2 + Number(ent_year)
  return {year: year, semester: semester}
}

function encodeSemester(year, semester, ent_year) {
  return (year - ent_year) * 2 + semester
}
module.exports = router;
