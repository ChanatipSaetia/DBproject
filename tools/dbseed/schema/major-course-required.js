const BaseTable = require('./base-table');

class MajorCourseRequiredTable extends BaseTable {
  constructor() {
    super('major_course_required', ['mid', 'course_no'], ['major', 'course']);
  }

  ensureMockData() {
    super.ensureMockData();
    const major_course = [...require('../major_required.json')];
    for (let i = 0; i < major_course.length; i++) {
      super.putData(major_course[i])
    }
  }
}

module.exports = MajorCourseRequiredTable;
