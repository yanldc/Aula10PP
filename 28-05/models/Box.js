const items = require('../data/items');

class Box {
  constructor(customer) {
    this.customer = customer;
    this.items = [];
    this.total = 0;
  }

  generateBox() {
    for (let i = 0; i < this.customer.maxItems; i++) {
      const randomItem = items[Math.floor(Math.random() * items.length)];
      this.items.push(randomItem);
      this.total += randomItem.price;
    }
  }

  showBox() {
    console.log(`Cliente: ${this.customer.name} (${this.customer.category})`);
    console.log('Itens da Caixa:');
    this.items.forEach((item, index) => {
      console.log(`${index + 1}. ${item.name} - R$ ${item.price.toFixed(2)}`);
    });
    console.log(`\nTotal: R$ ${this.total.toFixed(2)}\n`);
  }
}

module.exports = Box;