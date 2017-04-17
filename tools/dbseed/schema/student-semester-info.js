const BaseTable = require('./base-table');

class StudentSemesterInfoTable extends BaseTable {
  constructor() {
    super('student_semester_info', ['sid', 'semester', 'year'], ['student']);
  }

  ensureMockData() {
    super.ensureMockData();
  }
}

module.exports = StudentSemesterInfoTable;

