// El ejercicio - Calculadora de Tiempo (segundos a minutos)

let totalSegundos = 425;

let minutosCompletos = parseInt(425 / 60);

let segundosRestantes = 425 % 60;

console.log(
  `${totalSegundos} segundos son ${minutosCompletos} minutos y ${segundosRestantes} segundos.`,
);
