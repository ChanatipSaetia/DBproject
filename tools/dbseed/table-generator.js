const program = require('commander');

class TableGenerator {
  constructor(isForce) {
    this.isForce = isForce;
  }

  run() {
    console.log('Table Gen');
    return true;
  }
}

module.exports = TableGenerator;
