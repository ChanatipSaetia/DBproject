const BaseTable = require('./base-table');

class FacultyTable extends BaseTable {
  constructor() {
    super('faculty', ['id'], []);
  }

  ensureMockData() {
    super.ensureMockData();
  }
}

module.exports = FacultyTable;

