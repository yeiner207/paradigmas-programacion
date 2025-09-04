
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
}));

// 2. Agregar campo "status" basado en stock (High, Medium, Low)
const productsWithStatus = productsWithTax.map(p => ({
    ...p,
    status: p.stock > 50 ? "High" : p.stock >= 20 ? "Medium" : "Low"
}));

// 3. Crear un resumen de inventario por categoría
const inventorySummary = productsWithStatus.reduce((summary, product) => {
    if (!summary[product.category]) {
        summary[product.category] = { totalStock: 0, totalValue: 0, count: 0 };
    }
    summary[product.category].totalStock += product.stock;
    summary[product.category].totalValue += product.price * product.stock;
    summary[product.category].count += 1;
    return summary;
}, {});

// ----------------------------
// PRUEBAS
// ----------------------------

console.log("📌 Productos con IVA y estado de stock:");
console.log(productsWithStatus);

console.log("\n📌 Resumen de inventario por categoría:");
console.log(inventorySummary);
