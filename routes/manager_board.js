const express = require('express');
const db = require('../db');
const dbHelper = require('../db-helper');
const moment = require('moment');
const router = express.Router();


router.get('/', function (req, res, next) {
  /*
  dbHelper.queryAsPromise('SELECT ent_year, count(sid) as count FROM student GROUP BY ent_year')
    .then(function (data) {
      const rows = data.rows;
      let studentNum = [];
      let m
      for(let i=0;i<rows.length;i++){
        studentNum.push(rows[i].count);
      }
      console.log(studentNum);
      res.render('manager_board', {
        data: rows,
        studentNum : studentNum,
        serverTime: moment().format('LLLL')
      });
    });

  Promise.all([
    dbHelper.queryAsPromise('...', []),
    dbHelper.queryAsPromise('...', []),
    dbHelper.queryAsPromise('...', []),
    dbHelper.queryAsPromise('...', [])
  ]).then((data) => {
    const result1 = data[0].rows;
    const result1 = data[1].rows;
    const result1 = data[2].rows;
    const result1 = data[3].rows;

    res.render('...', {
      result1.rows
    })
  });*/


  //Get Student Info Summary data
  db.query(
    'SELECT ent_year, count(sid) as count FROM student GROUP BY ent_year;',
    (err, rows) => {
      if (err) {
        return next(err);
      }
      console.log(rows);
      let studentNum = [];
      for(let i=0;i<rows.length;i++){
        studentNum.push(rows[i].count);
      }
      console.log(studentNum);
      res.render('manager_board', {
        data: rows,
        studentNum : studentNum,
        user: req.user
      });
    }
  );

});

module.exports = router;
