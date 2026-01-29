// Variables

// var
var helloWorld = "¡Hola Javascript!";
console.log(helloWorld);

// No recomendado (problemas de scope)
helloWorld = "Hola de nuevo";
console.log(helloWorld);

// let
let helloWorld2 = "Hola javascript 2";
console.log(helloWorld2);

helloWorld2 = "hola js 2, de nuevo";
console.log(helloWorld2);

// const
const helloWorld3 = "Hola javascript 3";
console.log(helloWorld2);

// Error --> No se puede reasignar su valor
// helloWorld3 = "hola js 3!";
// console.log(helloWorld2);
