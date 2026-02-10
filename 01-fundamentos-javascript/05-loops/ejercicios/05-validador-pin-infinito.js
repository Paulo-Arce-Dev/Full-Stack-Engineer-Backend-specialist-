// Ejercicio - El validador de "PIN" infinito

let pinInfinito = 0;
const PIN_CORRECTO = 1234;

while (true) {
  pinInfinito += 100;
  if (pinInfinito >= PIN_CORRECTO) {
    break;
  } else {
    console.log(`PIN ${pinInfinito} incorrecto, intentando de nuevo...`);
  }
}

console.log("Acceso concedido");
