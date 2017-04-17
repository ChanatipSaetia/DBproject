const BaseTable = require('./base-table');

class EnrollmentTable extends BaseTable {
  constructor() {
    super('enrollment', ['id'], ['course', 'student_semester_info']);
  }

  ensureMockData() {
    super.ensureMockData();
  }
}

module.exports = EnrollmentTable;

