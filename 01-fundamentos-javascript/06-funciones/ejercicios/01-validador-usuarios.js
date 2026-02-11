// Ejercicio - El Validador de Usuarios
function esUsuarioValido(nombre, longitudMin) {
  let nombreUsuario = nombre;
  let longitudMinima = longitudMin;

  return nombreUsuario.length > longitudMinima;
}

console.log(esUsuarioValido("paulo", 4));
