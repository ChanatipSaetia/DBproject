const BaseTable = require('./base-table');

class AbsentRecordHasStudentTable extends BaseTable {
  constructor() {
    super('absent_record_has_student', ['arid', 'sid'], ['absent_record', 'student']);
  }

  generateMockData() {
  }
}

module.exports = AbsentRecordHasStudentTable;

