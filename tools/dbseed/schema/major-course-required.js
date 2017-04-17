const BaseTable = require('./base-table');

class MajorCourseRequiredTable extends BaseTable {
  constructor() {
    super('major_course_required', ['id'], ['major', 'course']);
  }

  ensureMockData() {
    super.ensureMockData();
  }
}

module.exports = MajorCourseRequiredTable;

