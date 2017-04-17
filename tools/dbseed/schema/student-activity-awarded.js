const BaseTable = require('./base-table');

class StudentActivityAwardedTable extends BaseTable {
  constructor() {
    super('student_activity_awarded', ['sid', 'aid', 'award'], ['activity', 'student']);
  }

  ensureMockData() {
    super.ensureMockData();
  }
}

module.exports = StudentActivityAwardedTable;

