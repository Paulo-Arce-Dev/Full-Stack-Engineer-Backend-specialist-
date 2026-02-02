// Mini Proyecto: Perfil de Usuario Pro

let nombreCompleto = " anA lUciA gOmEz ";
let edad = 28;
let biografia = "Me encanta programar en Python y JS";
let idRegistro = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);

// 1. Normalizacion de nombre
let nombreLimpio = nombreCompleto.trim().toUpperCase();

// 2. Generacion de username
let nombreDeUsuario =
  nombreLimpio.split(" ")[0].toLocaleLowerCase() + idRegistro;

// 3. Censura de Biografia
let biografiaPalabraReemplazada = biografia.replace("Python", "Javascript");

// 4. Resumen de Seguridad
let biografiaEsLarga = biografia.length > 30;

// 5. Resultado Final
let resultadoFianl = `
===== PERFIL DE USUARIO =====
NOMBRE: ${nombreLimpio}
USERNAME: ${nombreDeUsuario}
BIO: ${biografiaPalabraReemplazada}
¿BIO LARGA?: ${biografiaEsLarga}
=============================
`;

console.log(resultadoFianl);
