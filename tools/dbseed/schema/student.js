const BaseTable = require('./base-table');

class StudentTable extends BaseTable {
  constructor() {
    super('student', [
      'sid',
      'fname_th',
      'fname_en',
      'lname_th',
      'lname_en',
      'initial_name',
      'address_en',
      'address_th',
      'ent_year',
      'behav_score',
      'mid'
    ], ['major']);
  }

  ensureMockData() {
    super.ensureMockData();
  }
}

module.exports = StudentTable;

