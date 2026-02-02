// Ejercicio - Extractor de Dominio

let email = "usuario.de.prueba@google.com";
let indiceEmpresa = email.lastIndexOf("@");

let emailEmpresa = email.slice(indiceEmpresa + 1);
console.log(emailEmpresa);
