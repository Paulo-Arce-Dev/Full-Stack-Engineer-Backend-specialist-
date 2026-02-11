// Ejercicio - El Mini-Cajero Automático

function realizarRetiro(saldoActual = 0, montoRetirar = 0) {
  return montoRetirar <= saldoActual
    ? saldoActual - montoRetirar
    : "Fondos insuficientes";
}
console.log(realizarRetiro(1000, 3000));
