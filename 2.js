class Product {
  constructor(id, name, price, category, stock) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
    this.stock = stock;
  }

  // Método para actualizar stock
  updateStock(amount) {
    this.stock += amount;
    console.log(`Stock actualizado. Nuevo stock de ${this.name}: ${this.stock}`);
  }

  // Método para aplicar descuento en porcentaje
  calculateDiscount(percentage) {
    const discount = this.price * (percentage / 100);
    this.price -= discount;
    console.log(`Nuevo precio de ${this.name} tras ${percentage}% de descuento: $${this.price.toFixed(2)}`);
  }

  // Método para mostrar información
  getInfo() {
    return `ID: ${this.id} | ${this.name} - $${this.price.toFixed(2)} | Categoría: ${this.category} | Stock: ${this.stock}`;
  }

  // Método estático: calcular el valor total del inventario
  static getTotalValue(products) {
    return products.reduce((total, product) => {
      return total + product.price * product.stock;
    }, 0);
  }
}
