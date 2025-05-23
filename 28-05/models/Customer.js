class Customer {
    constructor(name, category) {
      this.name = name;
      this.category = category;
      this.maxItems = this.defineItemLimit(category);
    }
  
    defineItemLimit(category) {
      const limits = {
        bronze: 3,
        prata: 5,
        ouro: 7,
        platina: 10,
      };
  
      return limits[category.toLowerCase()] || 0;
    }
  }
  
  module.exports = Customer;