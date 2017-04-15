const express = require('express');
const db = require('../db');
const router = express.Router();

router.get('/', function (req, res, next) {
  //Get Student Info Summary data
  db.query(
    'SELECT ent_year, count(sid) as count FROM dbproject.student GROUP BY ent_year;',
    (err, rows) => {
      if (err) {
        return next(err);
      }
      const studentNum = rows.map(row => row.count);
      res.render('manager_board', {
        data: rows,
        studentNum: studentNum
      });
    }
  );
});

module.exports = router;
