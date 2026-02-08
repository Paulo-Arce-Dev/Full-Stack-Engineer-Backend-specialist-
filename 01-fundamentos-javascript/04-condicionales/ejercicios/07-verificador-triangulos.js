// Ejercicio - Verificador de Triángulos

let ladoA = 18;
let ladoB = 18;
let ladoC = 22;

// verificacion si es triangulo
if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
  if (ladoA === ladoB && ladoB === ladoC) {
    console.log("Triángulo Equilátero");
  } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    console.log("Triángulo Isósceles");
  } else {
    console.log("Triángulo Escaleno");
  }
} else {
  console.log("No es un triángulo válido");
}
