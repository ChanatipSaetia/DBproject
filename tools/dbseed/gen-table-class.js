function generateTableClassFileData(modelName, tableName) {
  return `const BaseTable = require('./base-table');

class ${modelName}Table extends BaseTable {
  constructor() {
    super('${tableName}', ['id'], []);
  }

  ensureMockData() {
    super.ensureMockData();
  }
}

module.exports = ${modelName}Table;
`;
}

const modelName = process.argv[2];
const tableName = process.argv[3];
console.log(generateTableClassFileData(modelName, tableName));
