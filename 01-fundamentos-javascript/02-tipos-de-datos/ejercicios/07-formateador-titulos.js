// Ejercicio - El Formateador de Titulos

let tituloSucio = " cómo aprender javascript en 2026 ";
let tituloSinEspacios = tituloSucio.trim().toLocaleLowerCase();

let tituloLimpio =
  tituloSinEspacios.charAt(0).toUpperCase() + tituloSinEspacios.slice(1);
console.log(tituloLimpio);
