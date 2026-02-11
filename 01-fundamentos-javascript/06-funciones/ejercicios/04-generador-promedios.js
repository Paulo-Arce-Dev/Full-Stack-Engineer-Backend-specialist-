// Ejercicio - Generador de Promedios

function calcularPromedio(nota1, nota2, nota3) {
  let promedio = (nota1 + nota2 + nota3) / 3;
  return parseFloat(promedio.toFixed(2));
}

function darEstado(promedio) {
  return promedio >= 6 ? "Aprobado" : "Reprobado";
}
console.log(darEstado(calcularPromedio(6, 7, 5)));
