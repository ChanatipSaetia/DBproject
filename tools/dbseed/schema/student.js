const BaseTable = require('./base-table');

class StudentTable extends BaseTable {
  constructor() {
    super('student', ['id'], ['major']);
  }

  ensureMockData() {
    super.ensureMockData();
  }
}

module.exports = StudentTable;

