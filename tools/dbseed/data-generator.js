const program = require('commander');

class DataGenerator {
  constructor(isForce) {
    this.isForce = isForce;
  }

  run() {
    console.log('Data Gen');
    return true;
  }
}

module.exports = DataGenerator;
