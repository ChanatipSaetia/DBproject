const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  const courseID = req.query.course_no;
  const courseName = req.query.shortname;

  if(courseID && courseID.length > 0 || courseName && courseName.length > 0){
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
          serverTime: moment().format('LLLL')
        });
      }
    );
  } else {
    res.render('course', { searched: false });
  }
});

module.exports = router;
