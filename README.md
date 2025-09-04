Taller: Paradigmas de Programación en JavaScript

Este repositorio contiene mi solución al taller de Paradigmas de Programación en JavaScript.
El objetivo principal fue poner en práctica diferentes enfoques de programación (funcional, orientado a objetos y procedural) para resolver problemas comunes, manteniendo el código claro, legible y estructurado.

¿Qué incluye este proyecto?

El taller está dividido en cinco ejercicios, cada uno diseñado para aplicar un paradigma diferente:

Ejercicio 1 – Gestión de Estudiantes (Funcional)

Trabajé con un array de estudiantes utilizando métodos como map, filter, reduce y find.
Se implementaron funciones para:

Encontrar estudiantes de JavaScript con nota mayor a 80.

Calcular el promedio de notas.

Obtener solo los nombres de los mayores de 20 años.

Identificar al estudiante con la mejor nota.

Ejercicio 2 – Calculadora de Productos (Orientado a Objetos)

Se creó una clase Product con propiedades (id, name, price, category, stock) y métodos:

updateStock(): actualiza el inventario.

calculateDiscount(): aplica descuentos por categoría.

getInfo(): devuelve la información del producto.

getTotalValue() (estático): calcula el valor total de un conjunto de productos.

Se añadieron cinco productos de ejemplo para realizar pruebas.

Ejercicio 3 – Validación de Datos (Procedural)

Este ejercicio se resolvió con funciones independientes, siguiendo un enfoque procedural:

validateEmail(email): comprueba que el correo tenga un formato válido.

validatePassword(password): revisa que la contraseña sea segura (mínimo 8 caracteres, mayúscula, número y símbolo).

validateAge(age): valida que la edad sea un número válido entre 18 y 120.

validateProduct(product): comprueba que un producto tenga todos los campos correctos.

Ejercicio 4 – Filtros Avanzados (Funcional)

Se implementaron filtros y agrupaciones sobre un array de productos utilizando filter y reduce:

Filtrar productos por rango de precio.

Agrupar productos por categoría.

Encontrar productos de una marca específica.

Calcular estadísticas por categoría (promedio, cantidad y valor total).

Ejercicio 5 – Transformación de Datos (Funcional)

El último ejercicio consistió en transformar un array de productos con map y reduce:

Agregar el campo priceWithTax con IVA del 19 %.

Incluir el campo status en función del stock (High, Medium, Low).

Crear un resumen de inventario por categoría (total de stock, valor total y cantidad de productos)

Este taller me permitió practicar diferentes formas de resolver problemas en JavaScript:

El paradigma funcional para trabajar con arrays de forma más expresiva.

El paradigma orientado a objetos para modelar entidades como los productos.

El enfoque procedural para validar datos de manera simple y directa.

Aplicar distintos paradigmas sobre un mismo lenguaje amplía las herramientas que uno tiene como programador y ayuda a pensar en soluciones más flexibles y mantenibles.