const BaseTable = require('./base-table');

class UserTable extends BaseTable {
  constructor() {
    super('user', ['id'], []);
  }

  ensureMockData() {
    super.ensureMockData();
  }
}

module.exports = UserTable;

