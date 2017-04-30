const BaseTable = require('./base-table');
const chance = require('chance')(Math.random);

class AbsentRecordHasStudentTable extends BaseTable {
  constructor() {
    super('absent_record_has_student', ['arid', 'sid'], ['absent_record', 'student']);
  }

  generateMockData() {
    const studentData = super.getDepTable('student').getData();
    const absentData = super.getDepTable('absent_record').getData();
    for (let i = 0; i < 200; i++) {
      var absent = {}
      var students = chance.pickset(studentData, chance.integer({ min: 1, max: 5 }));
      var aridd = chance.pickone(absentData).arid;

      for (const student of students) {
        super.putData({
          arid: aridd,
          sid: student.sid
        });
      }
    }
  }

}

module.exports = AbsentRecordHasStudentTable;

