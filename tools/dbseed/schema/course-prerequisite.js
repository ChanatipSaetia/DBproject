const BaseTable = require('./base-table');

class CoursePrerequisiteTable extends BaseTable {
  constructor() {
    super('course_prerequisite', ['id'], ['course']);
  }

  ensureMockData() {
    super.ensureMockData();
  }
}

module.exports = CoursePrerequisiteTable;

