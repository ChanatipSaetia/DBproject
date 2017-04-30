const express = require('express');
const db = require('../db');

const router = express.Router();

router.get('/', function (req, res, next) {

  var sql;
  var inserts;
  db.query(sql, inserts,
    (err, rows) => {
      if (err) {
        return next(err);
      }
      console.log(rows);
      res.render('about', {
        total: rows.length,
        data: rows,
        user: req.user
      });
    }
  );
});

module.exports = router;
