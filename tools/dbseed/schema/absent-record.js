const BaseTable = require('./base-table');

class AbsentRecordTable extends BaseTable {
  constructor() {
    super('absent_record', ['id'], []);
  }

  ensureMockData() {
    super.ensureMockData();
  }
}

module.exports = AbsentRecordTable;

