const BaseTable = require('./base-table');

class FacultyTable extends BaseTable {
  constructor() {
    super('faculty', ['fid', 'name_th', 'name_en'], []);
  }

  ensureMockData() {
    super.ensureMockData();
    const facultyData = [
      ['21', 'คณะวิศวกรรมศาสตร์', 'Faculty Of Engineering'],
      ['22', 'คณะอักษรศาสตร์', 'Faculty Of Arts'],
      ['23', 'คณะวิทยาศาสตร์', 'Faculty Of Science'],
      ['24', 'คณะรัฐศาสตร์', 'Faculty Of Political Science'],
      ['25', 'คณะสถาปัตยกรรมศาสตร์', 'Faculty Of Architecture'],
      ['26', 'คณะพาณิชยศาสตร์และการบัญชี', 'Faculty Of Commerce And Accountancy'],
      ['27', 'คณะครุศาสตร์', 'Faculty Of Education'],
      ['28', 'คณะนิเทศศาสตร์', 'Faculty Of Communication Arts'],
      ['29', 'คณะเศรษฐศาสตร์', 'Faculty Of Economics'],
      ['30', 'คณะแพทยศาสตร์', 'Faculty Of Medicine'],
      ['31', 'คณะสัตวแพทยศาสตร์', 'Faculty Of Veterinary Science'],
      ['32', 'คณะทันตแพทยศาสตร์', 'Faculty Of Dentistry'],
      ['33', 'คณะเภสัชศาสตร์', 'Faculty Of Pharmaceutical Sciences'],
      ['34', 'คณะนิติศาสตร์', 'Faculty Of Law'],
      ['35', 'คณะศิลปกรรมศาสตร์', 'Faculty Of Fine And Applied Arts'],
      ['36', 'คณะพยาบาลศาสตร์', 'Faculty Of Nursing'],
      ['37', 'คณะสหเวชศาสตร์', 'Faculty Of Allied Health Sciences'],
      ['38', 'คณะจิตวิทยา', 'Faculty Of Psychology'],
      ['39', 'คณะวิทยาศาสตร์การกีฬา', 'Faculty Of Sports Science']
    ]

    for (const faculty of facultyData) {
      super.putData({
        fid: faculty[0],
        name_th: faculty[1],
        name_en: faculty[2]
      })
    }
  }
}

module.exports = FacultyTable;

