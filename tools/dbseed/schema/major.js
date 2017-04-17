const BaseTable = require('./base-table');

class MajorTable extends BaseTable {
  constructor() {
    super('major', [
      'mid',
      'name_en',
      'name_th',
      'did',
      'required_lang',
      'required_approve'
    ], ['department']);
  }

  ensureMockData() {
    super.ensureMockData();
  }
}

module.exports = MajorTable;

