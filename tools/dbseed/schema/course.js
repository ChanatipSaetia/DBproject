const BaseTable = require('./base-table');
const chance = require('chance')(Math.random);

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

  generateMockData() {
    const courseList = [...require('../course.json')];
    const departmentData = super.getDepTable('department').getData();
    for (let i = 0; i < courseList.length; i++) {
      const did = chance.pickone(departmentData).did;
      courseList[i].did = did;
      super.putData(courseList[i]);
    }
  }
}

module.exports = CourseTable;