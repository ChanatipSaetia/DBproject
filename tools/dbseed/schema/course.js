const BaseTable = require('./base-table');

class CourseTable extends BaseTable {
  constructor() {
    super('course', ['id'], ['department']);
  }

  ensureMockData() {
    super.ensureMockData();
  }
}

module.exports = CourseTable;

