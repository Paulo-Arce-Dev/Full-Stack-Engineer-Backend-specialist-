// Ejercicio - Ofuscador de Tarjetas de Crédito
let tarjeta = "4548123456789012";
let ultimos4Digitos = tarjeta.slice(-4);

const digitosSeguros = "************";
let resultadoTarjeta = digitosSeguros + ultimos4Digitos;
console.log(resultadoTarjeta);
