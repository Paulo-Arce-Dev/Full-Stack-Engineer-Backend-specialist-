// Ejercicio - Validador de Precios

let precioBase = 1000;

// 1. si paga con tarjeta +10%
let aumentoPorTarjeta = precioBase * 0.1;
precioBase += aumentoPorTarjeta;

// 2. si despues usa descuento -$200
precioBase -= 200;
console.log(`Precio final: $${precioBase}`);
