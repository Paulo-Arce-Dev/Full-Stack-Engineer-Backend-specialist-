// Ejercicio - El Simulador de Semáforo

let color = "violeta";
color = color.toLowerCase();

if (color === "verde") {
  console.log("¡Avanza!");
} else if (color === "amarillo") {
  console.log("¡Cuidado, frena!");
} else if (color === "rojo") {
  console.log("¡Detente!");
} else {
  console.log("Semáforo averiado");
}
