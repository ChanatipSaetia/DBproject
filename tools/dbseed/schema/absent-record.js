const BaseTable = require('./base-table');

class AbsentRecordTable extends BaseTable {
  constructor() {
    super('absent_record', ['arid', 'start_date', 'end_date', 'name', 'description'], []);
  }

  ensureMockData() {
    super.ensureMockData();
  }
}

module.exports = AbsentRecordTable;

