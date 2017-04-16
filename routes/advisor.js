const express = require('express');
const db = require('../db');

const router = express.Router();

router.get('/', function (req, res, next) {

  var sql = "SELECT * FROM `student`";
  var inserts = ['%' + '1' + '%'];
  db.query(sql, inserts,
    (err, rows) => {
      if (err) {
        return next(err);
      }
      console.log(rows);
      res.render('advisor', {
        total: rows.length,
        data: rows
      });
    }
  ); 
});
  
module.exports = router;
