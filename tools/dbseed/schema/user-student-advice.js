const BaseTable = require('./base-table');

class UserStudentAdviceTable extends BaseTable {
  constructor() {
    super('user_student_advice', ['user_id', 'student_sid'], ['student']);
  }

  ensureMockData() {
    super.ensureMockData();
  }
}

module.exports = UserStudentAdviceTable;

