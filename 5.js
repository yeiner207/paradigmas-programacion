const products = [
    { id: 1, name: "Laptop", price: 2500, category: "Electronics", stock: 10 },
    { id: 2, name: "Mouse", price: 50, category: "Electronics", stock: 100 },
    { id: 3, name: "Camisa", price: 80, category: "Clothes", stock: 25 },
    { id: 4, name: "Zapatos", price: 120, category: "Clothes", stock: 15 },
    { id: 5, name: "Celular", price: 1200, category: "Electronics", stock: 30 },
    { id: 6, name: "Cafetera", price: 300, category: "Home", stock: 20 }
];

// 1. Agregar campo "priceWithTax" (19% IVA)
const productsWithTax = products.map(p => ({
    ...p,
    priceWithTax: (p.price * 1.19).toFixed(2) // dos decimales
}))