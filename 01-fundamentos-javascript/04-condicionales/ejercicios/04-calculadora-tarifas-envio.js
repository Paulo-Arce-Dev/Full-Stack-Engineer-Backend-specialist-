// Ejercicio - Calculadora de Tarifas de Envio

let pesoPaquete = 4;
let costo;

if (pesoPaquete < 5) {
  costo = 500;
  console.log(costo);
} else if (pesoPaquete >= 5 && pesoPaquete <= 10) {
  costo = 1000;
  console.log(costo);
} else if (pesoPaquete > 10) {
  let costoBase = 1000;
  let costoPorKilo = (pesoPaquete - 10) * 200;
  costo = costoBase + costoPorKilo;
  console.log(costo);
}
