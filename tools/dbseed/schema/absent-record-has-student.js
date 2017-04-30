const BaseTable = require('./base-table');
const chance = require('chance')(Math.random);

class AbsentRecordHasStudentTable extends BaseTable {
  constructor() {
    super('absent_record_has_student', ['arid', 'sid'], ['absent_record', 'student']);
  }

  generateMockData() {
    const studentData = super.getDepTable('student').getData();
    const absentData = super.getDepTable('absent_record').getData();
    for (const absentPiece of absentData) {
      var students = chance.pickset(studentData, chance.integer({ min: 1, max: 5 }));
      var aridd = absentPiece.arid;
      for (const student of students) {
        super.putData({
          arid: i,
          sid: student.sid
        });
      }
    }
  }

}

module.exports = AbsentRecordHasStudentTable;

