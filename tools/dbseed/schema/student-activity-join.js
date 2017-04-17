const BaseTable = require('./base-table');

class StudentActivityJoinTable extends BaseTable {
  constructor() {
    super('student_activity_join', ['id'], ['activity', 'student']);
  }

  ensureMockData() {
    super.ensureMockData();
  }
}

module.exports = StudentActivityJoinTable;

