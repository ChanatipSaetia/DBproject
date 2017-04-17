const BaseTable = require('./base-table');

class DepartmentTable extends BaseTable {
  constructor() {
    super('department', ['did', 'name_th', 'name_en', 'fid'], ['faculty']);
  }

  ensureMockData() {
    super.ensureMockData();
    
    const departmentKeywords = [
      ['คอมพิวเตอร์', 'Computer'],
      ['ไฟฟ้า', 'Electrical'],
      ['โยธา', 'Civil'],
      ['นิวเคลียร์', 'Nuclear'],
      ['เคมี', 'Chemical']
    ];

    const faculties = super.getDepTable('faculty').getData();
    for (let i = 0; i < faculties.length; i++) {
      const faculty = faculties[i];
      const shortFacultyNameTH = faculty.name_th.slice(3);
      const shortFacultyNameEN = faculty.name_en.substring(11);
      for (let j = 0; j < Math.max(2, departmentKeywords.length - i); j++) {
        const keyword = departmentKeywords[j];
        super.putData({
          did: i * 100 + j,
          name_th: shortFacultyNameTH + keyword[0],
          name_en: keyword[1] + ' ' + shortFacultyNameEN,
          fid: faculty.fid
        });
      }
    }
  }
}

module.exports = DepartmentTable;

