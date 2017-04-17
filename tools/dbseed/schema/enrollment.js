const BaseTable = require('./base-table');

class EnrollmentTable extends BaseTable {
  constructor() {
    super('enrollment', [
      'eid',
      'created_time',
      'grade',
      'edited_time',
      'course_no',
      'sid',
      'semester',
      'year'
    ], ['course', 'student_semester_info']);
  }

  ensureMockData() {
    super.ensureMockData();
  }
}

module.exports = EnrollmentTable;

