// Ejercicio - Año bisiesto

let año = 2028;
let añoBisiesto = null;

if ((año % 4 == 0 && año % 100 != 0) || año % 400 == 0) {
  console.log("Es bisiesto");
} else {
  console.log("No es bisiesto");
}
