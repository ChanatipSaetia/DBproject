const BaseTable = require('./base-table');

class ActivityTable extends BaseTable {
  constructor() {
    super('activity', ['id'], []);
  }

  ensureMockData() {
    super.ensureMockData();
  }
}

module.exports = ActivityTable;

