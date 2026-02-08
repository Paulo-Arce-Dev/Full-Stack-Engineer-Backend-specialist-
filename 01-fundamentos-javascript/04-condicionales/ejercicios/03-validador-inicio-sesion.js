// Ejercicio - Validador de Inicio de Sesión

let usuarioValido = true;
let contraseñaCorrecta = false;

if (usuarioValido) {
  if (contraseñaCorrecta) {
    console.log("Acceso concedido");
  }
}

if (usuarioValido && contraseñaCorrecta == false) {
  console.log("Contrseña incorecta");
}

// 2
if (!usuarioValido) {
  console.log("Usuario no encontrado");
}
