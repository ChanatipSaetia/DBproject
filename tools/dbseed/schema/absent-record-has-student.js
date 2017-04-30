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
        const sid = chance.pickone(studentData).sid;
        const arid = chance.pickone(absentData).arid;
        absent.sid = sid;
        absent.arid = arid;
        super.putData(absent);
    }
  }
}

module.exports = AbsentRecordHasStudentTable;

