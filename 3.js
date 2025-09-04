// 1. Validar Email
function validateEmail(email) {
    // Expresión regular básica para formato de email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// 2. Validar Password (mínimo 8 caracteres, al menos una mayúscula, un número y un símbolo)
function validatePassword(password) {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
}

// 3. Validar Edad (debe ser número y mayor o igual a 18)
function validateAge(age) {
    return Number.isInteger(age) && age >= 18 && age <= 120;
}

// 4. Validar Objeto Producto (debe tener propiedades correctas)
function validateProduct(product) {
    if (typeof product !== "object" || product === null) return false;

    const { id, name, price, category, stock } = product;

    return (
        typeof id === "number" &&
        typeof name === "string" &&
        typeof price === "number" && price > 0 &&
        typeof category === "string" &&
        typeof stock === "number" && stock >= 0
    );
}

// ----------------------------
// PRUEBAS
// ----------------------------

console.log("Validación de Email:");
console.log(validateEmail("test@example.com")); // true
console.log(validateEmail("correo.com")); // false

console.log("\nValidación de Password:");
console.log(validatePassword("StrongP@ss1")); // true
console.log(validatePassword("weakpass")); // false

console.log("\nValidación de Edad:");
console.log(validateAge(25)); // true
console.log(validateAge(15)); // false

console.log("\nValidación de Producto:");
const product1 = { id: 1, name: "Laptop", price: 2500, category: "Electronics", stock: 10 };
const product2 = { id: "x", name: "TV", price: -100, category: "Electronics", stock: -2 };
console.log(validateProduct(product1)); // true
console.log(validateProduct(product2)); // false