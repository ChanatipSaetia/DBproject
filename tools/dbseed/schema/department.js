const BaseTable = require('./base-table');

class DepartmentTable extends BaseTable {
  constructor() {
    super('department', ['id'], ['faculty']);
  }

  ensureMockData() {
    super.ensureMockData();
  }
}

module.exports = DepartmentTable;

