// Ejercicio - El Contador de letras "A"

function contadorLetrasA(texto) {
  let letrasA = [];
  for (let i = 0; i < texto.length; i++) {
    let letra = texto[i];
    if (letra == "a" || letra == "A") {
      letrasA.push(letra);
    }
  }
  return `Letras a-A encontradas: ${letrasA.length}`;
}

console.log(
  contadorLetrasA(
    "Elon Musk es un empresario exitoso. Es la persona mas RICA de todo el mundo",
  ),
);
