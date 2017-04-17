const BaseTable = require('./base-table');

class ActivityTable extends BaseTable {
  constructor() {
    super('activity', ['aid', 'name', 'start_date', 'duration'], []);
  }

  ensureMockData() {
    super.ensureMockData();
  }
}

module.exports = ActivityTable;

