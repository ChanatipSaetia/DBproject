const BaseTable = require('./base-table');

class CourseTable extends BaseTable {
  constructor() {
    super('course', [
      'course_no',
      'name_en',
      'name_th',
      'shortname',
      'credit',
      'subcredit_1',
      'subcredit_2',
      'subcredit_3',
      'special_type',
      'did'
    ], ['department']);
  }

  ensureMockData() {
    super.ensureMockData();
  }
}

module.exports = CourseTable;

