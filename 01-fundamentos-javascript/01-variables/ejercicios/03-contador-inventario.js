// Ejercicio - El contador de inventario

let cantidadProductos = 20;
let cantidadProductosNuevos = 10;
cantidadProductos = cantidadProductos + cantidadProductosNuevos;
console.log(
  `La cantidad de productos despues de ${cantidadProductosNuevos} productos nuevos: ${cantidadProductos}`,
);

let cantidadProductosVendidos = 3;
cantidadProductos = cantidadProductos - cantidadProductosVendidos;
console.log(`La cantidad de productos final es de: ${cantidadProductos}`);
