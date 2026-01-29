// Ejercicio - El calculador de IVA

const IVA = 0.55;
let precioBase = 15000;

let ivaProducto = precioBase * IVA;
console.log(`Precio del IVA en el producto: $${ivaProducto}`);

let precioFinal = precioBase + ivaProducto;
console.log(`Precio sin IVA: $${precioBase}`);

console.log(`Precio Final: $${precioFinal}`);
