// Ejercicio - El juego de las ofertas

let cantidadComprada = 6;

let descuento =
  cantidadComprada >= 10
    ? "20%"
    : cantidadComprada >= 5 && cantidadComprada <= 9
      ? "10%"
      : "Sin descuento";

console.log(descuento);
