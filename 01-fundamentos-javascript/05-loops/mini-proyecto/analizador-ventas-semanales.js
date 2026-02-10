// Mini proyecto: Analizador de ventas semanales

let totalVentas = 0;
for (let i = 1; i <= 7; i++) {
  let numeroDia = i;

  // generacion de ventas
  let montoVenta = Math.floor(Math.random() * (10000 - 1000 + 1) + 1000);

  // total de ventas
  totalVentas += montoVenta;

  if (montoVenta > 7000) {
    console.log(`Día ${numeroDia}: $${montoVenta} - ¡Excelente venta!`);
  } else if (montoVenta < 3000) {
    console.log(`Día ${numeroDia}: $${montoVenta} - Venta baja`);
  } else {
    console.log(`Día ${numeroDia}: $${montoVenta}`);
  }

  if (numeroDia == 7) {
    let promedio = totalVentas / 7;
    let resumen = `
  ----------------------------
  Total de la semana: $${totalVentas.toFixed(2)}
  Promedio diario: $${promedio.toFixed(2)}
  ----------------------------
  `;
    console.log(resumen);
  }
}
