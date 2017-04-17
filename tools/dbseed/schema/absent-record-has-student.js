const BaseTable = require('./base-table');

class AbsentRecordHasStudentTable extends BaseTable {
  constructor() {
    super('absent_record_has_student', ['arid', 'sid'], ['absent_record', 'student']);
  }

  ensureMockData() {
    super.ensureMockData();
  }
}

module.exports = AbsentRecordHasStudentTable;

