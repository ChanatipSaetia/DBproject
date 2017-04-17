const program = require('commander');
const DataGenerator = require('./data-generator');

program
  .version('0.0.1')
  .option('-i, --insert-mock-data', 'Insert mocked data into database')
  .option('-f, --force', 'Allow deleting old data in the table if already have one before')
  .parse(process.argv);

function run() {
  const isForce = program.force;
  const { insertMockData } = program;

  let showHelp = true;

  if (insertMockData) {
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
