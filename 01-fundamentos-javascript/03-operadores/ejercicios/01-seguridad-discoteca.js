// Ejercicio - Seguridad de Discoteca (Comparación y Lógica)

let edad = 19;
let tieneEntrada = true;
let estaEnListaDeEspera = false;

let puedeEntrar = edad >= 18 && (tieneEntrada || estaEnListaDeEspera);
console.log(puedeEntrar);
