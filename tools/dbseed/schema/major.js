const BaseTable = require('./base-table');

class MajorTable extends BaseTable {
  constructor() {
    super('major', ['id'], ['department']);
  }

  ensureMockData() {
    super.ensureMockData();
  }
}

module.exports = MajorTable;

