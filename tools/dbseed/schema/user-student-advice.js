const BaseTable = require('./base-table');

class UserStudentAdviceTable extends BaseTable {
  constructor() {
    super('user_student_advice', ['id'], ['user', 'student']);
  }

  ensureMockData() {
    super.ensureMockData();
  }
}

module.exports = UserStudentAdviceTable;

