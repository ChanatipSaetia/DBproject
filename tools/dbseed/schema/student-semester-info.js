const BaseTable = require('./base-table');

class StudentSemesterInfoTable extends BaseTable {
  constructor() {
    super('student_semester_info', ['id'], ['student']);
  }

  ensureMockData() {
    super.ensureMockData();
  }
}

module.exports = StudentSemesterInfoTable;

