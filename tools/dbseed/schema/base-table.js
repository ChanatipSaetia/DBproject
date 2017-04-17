const mockDataGenerator = require('../mock-data-collector');
const injector = require('../table-dependency-injector');

class BaseTable {
  constructor(tableName, fieldNames, dependentTableNames) {
    this.tableName = tableName;
    this.fieldNames = fieldNames;
    this.dependentTableNames = dependentTableNames || [];

    injector.registerTable(this);
  }

  ensureMockData() {
    for (const dependentTableName of this.dependentTableNames) {
      const dependentTable = injector.getTable(dependentTableName);
      mockDataGenerator.registerTable(dependentTable);
    }
    mockDataGenerator.registerTable(this);
  }

  getTable(tableName) {
    return injector.getTable(tableName);
  }

  putData(data) {
    mockDataGenerator.addMockData(this, data);
  }
}

module.exports = BaseTable;
