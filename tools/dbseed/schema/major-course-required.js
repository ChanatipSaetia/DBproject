const BaseTable = require('./base-table');

class MajorCourseRequiredTable extends BaseTable {
  constructor() {
    super('major_course_required', ['mid', 'course_no'], ['major', 'course']);
  }

  generateMockData() {
  }
}

module.exports = MajorCourseRequiredTable;

