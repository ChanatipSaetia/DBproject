const BaseTable = require('./base-table');

class UserTable extends BaseTable {
  constructor() {
    super('user', ['id', 'password', 'display_name', 'type'], []);
  }

  ensureMockData() {
    super.ensureMockData();
  }
}

module.exports = UserTable;

