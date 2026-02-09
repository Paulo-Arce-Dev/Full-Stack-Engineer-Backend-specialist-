// Mini proyecto - Simulador de Cajero Automático

// Estructura sugerida: Usa un if principal para el PIN y, dentro de ese bloque, usá if / else if para el monto y el límite.

let saldoCuenta = 5000;
let montoAExtraer = 750;
let pinIngresado = 1234;
const PIN_CORRECTO = 1234;

// 1. Validación de PIN
if (pinIngresado === PIN_CORRECTO) {
  // 2. Validación de Límite
  if (montoAExtraer > 20000) {
    console.log("Límite de extracción excedido. Máximo $20.000 por operación.");
  }
  // 3. Validación de Fondos
  else if (montoAExtraer <= saldoCuenta) {
    saldoCuenta -= montoAExtraer;
    console.log(`Retiro exitoso. Nuevo saldo: $${saldoCuenta}`);
  } else {
    console.log("Fondos insuficientes");
  }
} else {
  console.log("PIN incorrecto. Acceso denegado");
}
