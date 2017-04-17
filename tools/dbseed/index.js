const program = require('commander');
const TableGenerator = require('./table-generator');
const DataGenerator = require('./data-generator');

program
  .version('0.0.1')
  .option('-t, --gen-table', 'Generate table with foreign keys')
  .option('-m, --gen-mock-data', 'Generate mocked data')
  .option('-f, --force', 'Allow dropping old database if already have one before')
  .parse(process.argv);

function run() {
  const isForce = program.force;
  const { genTable, genMockData } = program;

  let showHelp = true;

  if (genTable) {
    showHelp = false;
    const tableGenerator = new TableGenerator(isForce);
    const success = tableGenerator.run();
    if (!success) {
      return;
    }
  }

  if (genMockData) {
    showHelp = false;
    const dataGenerator = new DataGenerator(isForce);
    const success = dataGenerator.run();
    if (!success) {
      return;
    }
  }

  if (showHelp) {
    program.outputHelp();
  }
}

run();
