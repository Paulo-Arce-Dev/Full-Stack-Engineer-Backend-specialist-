// Ejercicios nivel inical

// 1. Saludador Personalizado
// - Crea una función llamada saludar que reciba un nombre y devuelva "Hola [nombre], bienvenido al sistema".

function saludar(nombre) {
  return `Hola ${nombre}, bienvenido al sistema`;
}
console.log(saludar("Tommy"));

// 2. Conversor de Horas
// - Crea una función que reciba un número de horas y devuelva ese valor convertido en minutos

function conversorHorasAMinutos(horas) {
  let minutos = horas * 60;
  return `Minutos: ${minutos.toFixed(2)}`;
}
console.log(conversorHorasAMinutos(2));

// 3 Calculadora de IV
// - Crea una función que reciba un precio y devuelva el precio con el 21% de IVA incluido.
function calculadoraIVA(precio) {
  return precio * 1.21;
}
console.log(calculadoraIVA(3250));
