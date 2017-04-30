const BaseTable = require('./base-table');

class AbsentRecordTable extends BaseTable {
  constructor() {
    super('absent_record', ['arid', 'start_date', 'end_date', 'name', 'description'], []);
  }

  generateMockData() {
    const absentList = [...require('../absent.json')];
    const studentData = super.getDepTable('student').getData();
    const absentData = super.getDepTable('absent').getData();
    for (let i = 0; i < absentList.length; i++) {
      for(let j=0; j<5; j++){
        const sid = chance.pickone(studentData).sid;
        const rid = chance.pickone(absentData).rid;
        absentList[i].sid = sid;
        absentList[i].rid = rid;
        super.putData(absentList[i]);
      }  
    }
  }
}

module.exports = AbsentRecordTable;

