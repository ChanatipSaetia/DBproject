const mockDataCollector = require('../mock-data-collector');
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
      mockDataCollector.registerTable(dependentTable);
    }
    mockDataCollector.registerTable(this);
  }

  getDepTable(depTableName) {
    if (this.dependentTableNames.indexOf(depTableName) === -1) {
      throw new Error(`Requesting for non dependent table "${depTableName}" from "${this.tableName}".`);
    }
    return injector.getTable(depTableName);
  }

  putData(data) {
    mockDataCollector.addMockData(this, data);
  }

  getData() {
    return mockDataCollector.getDataOfTable(this);
  }
}

module.exports = BaseTable;
