// Ejercicio - Sistema de Becas

let promedio = 8.5;
let ingresosFamiliares = 400000;
let distanciaEscuela = 30;

let esElegible =
  promedio > 8 && (ingresosFamiliares < 500000 || distanciaEscuela > 20);
console.log(esElegible);
