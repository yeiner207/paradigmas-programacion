
// Array de productos de ejemplo
const products = [
    { id: 1, name: "Laptop", price: 2500, category: "Electronics", brand: "Dell", stock: 10 },
    { id: 2, name: "Mouse", price: 50, category: "Electronics", brand: "Logitech", stock: 100 },
    { id: 3, name: "Camisa", price: 80, category: "Clothes", brand: "Nike", stock: 25 },
    { id: 4, name: "Zapatos", price: 120, category: "Clothes", brand: "Adidas", stock: 15 },
    { id: 5, name: "Celular", price: 1200, category: "Electronics", brand: "Samsung", stock: 30 },
    { id: 6, name: "Cafetera", price: 300, category: "Home", brand: "Philips", stock: 20 }
];

// 1. Filtrar productos por rango de precio
function filterByPriceRange(min, max) {
    return products.filter(p => p.price >= min && p.price <= max);
}

// 2. Agrupar productos por categoría
function groupByCategory() {
    return products.reduce((groups, product) => {
        if (!groups[product.category]) {
            groups[product.category] = [];
        }
        groups[product.category].push(product);
        return groups;
    }, {});
}

// 3. Encontrar productos de una marca específica
function findByBrand(brand) {
    return products.filter(p => p.brand.toLowerCase() === brand.toLowerCase());
}

// 4. Calcular estadísticas por categoría (promedio, total, cantidad)
function categoryStats() {
    return products.reduce((stats, product) => {
        if (!stats[product.category]) {
            stats[product.category] = { total: 0, count: 0, average: 0 };
        }
        stats[product.category].total += product.price;
        stats[product.category].count += 1;
        stats[product.category].average = 
            stats[product.category].total / stats[product.category].count;
        return stats;
    }, {});
}

// ----------------------------
// PRUEBAS
// ----------------------------

console.log("📌 Productos entre 100 y 1000:");
console.log(filterByPriceRange(100, 1000));

console.log("\n📌 Agrupados por categoría:");
console.log(groupByCategory());

console.log("\n📌 Productos de la marca 'Nike':");
console.log(findByBrand("Nike"));

console.log("\n📌 Estadísticas por categoría:");
console.log(categoryStats());
