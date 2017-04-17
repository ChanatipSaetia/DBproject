const BaseTable = require('./base-table');

class CoursePrerequisiteTable extends BaseTable {
  constructor() {
    super('course_prerequisite', ['course_no', 'pre_course_no'], ['course']);
  }

  ensureMockData() {
    super.ensureMockData();
  }
}

module.exports = CoursePrerequisiteTable;

