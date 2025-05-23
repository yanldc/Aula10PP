const Customer = require('../models/Customer');
const Box = require('../models/Box');

function createBoxForCustomer(name, category) {
  const customer = new Customer(name, category);
  const box = new Box(customer);
  box.generateBox();
  box.showBox();
}

module.exports = createBoxForCustomer;