const BaseTable = require('./base-table');

class DepartmentTable extends BaseTable {
  constructor() {
    super('department', ['did', 'name_th', 'name_en', 'fid'], ['faculty']);
  }

  ensureMockData() {
    super.ensureMockData();
  }
}

module.exports = DepartmentTable;

