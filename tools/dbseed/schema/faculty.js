const BaseTable = require('./base-table');

class FacultyTable extends BaseTable {
  constructor() {
    super('faculty', ['fid', 'name_th', 'name_en'], []);
  }

  ensureMockData() {
    super.ensureMockData();
  }
}

module.exports = FacultyTable;

