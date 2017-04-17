class MockDataCollector {
  constructor() {
    this.datasetMap = new Map();
    this.tableInsertOrder = [];
  }

  clear() {
    this.datasetMap.clear();
    this.tableInsertOrder = [];
  }

  registerTable(table) {
    if (!this.datasetMap.has(table)) {
      this.datasetMap.set(table, []);
      this.tableInsertOrder.push(table);
    }
  }

  addMockData(table, data) {
    this.datasetMap.get(table).push(data);
  }

  showDataset() {
    console.log();
    for (const table of this.tableInsertOrder) {
      const tableData = this.datasetMap.get(table);

      console.log('====================');
      console.log(`TABLE: ${table.tableName}`);
      console.log('Fields: ' + table.fieldNames.join(', '));
      console.log(`Count: ${tableData.length}`);
      console.log('----------');

      for (const row of tableData) {
        console.log(row);
      }

      console.log('====================');
      console.log();
      console.log();
    }
  }
}

module.exports = new MockDataCollector();
