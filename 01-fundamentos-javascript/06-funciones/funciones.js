// Funciones

// Simple
function saludar() {
  console.log("¡Hola, función!");
}

for (let i = 0; i < 5; i++) {
  saludar();
}

// Con parámetros
function saludarConParametros(nombre) {
  console.log(`¡Hola, ${nombre}!`);
}

saludarConParametros("Jeffrey");
saludarConParametros("Jeff Bezos");

// Funciones anónimas
const saludarFuncionAnonima = function (nombre) {
  console.log(`¡Hola, ${nombre}!`);
};

saludarFuncionAnonima("Jeff Bezos");

// Arrow functions - Función flecha
const saludarFuncionFlecha = (nombre) => {
  console.log(`¡Hola, ${nombre}!`);
};

const saludarFuncionFlecha2 = (nombre) => console.log(`¡Hola, ${nombre}!`);

saludarFuncionFlecha("Jeff Bezos");
saludarFuncionFlecha2("Jeff Bezos");

// Parámetros
function suma(num1, num2) {
  console.log(num1 + num2);
}

suma(5, 10);
suma(5);
suma();

function sumaPorDefecto(num1 = 0, num2 = 0) {
  console.log(num1 + num2);
}

// Por defecto
sumaPorDefecto();
sumaPorDefecto(5);
sumaPorDefecto(5, 10);
sumaPorDefecto(undefined, 5);

// Retorno de valores
function multiplicar(num1, num2) {
  return num1 * num2;
}

let resultado = multiplicar(5, 10);
console.log(resultado);

// Funciones anidadas
function externa() {
  console.log("Función externa");
  function interna() {
    console.log("Función interna");
  }
  interna();
}

externa();
// intern() Error: fuera del scope

// Funciones de orden superior
function ordenSuperior(funcion, parametro) {
  funcion(parametro);
}

ordenSuperior(saludarFuncionFlecha2, "función de orden superior");

// forEach
const numeros = [1, 2, 3, 4];

const mySet = new Set([
  "Jeffrey",
  "Bezos",
  "Jeff Bezos",
  62,
  true,
  "jeffbezos@amazon.com",
]);

const myMap = new Map([
  ["name", "Jeffrey"],
  ["email", "jeffbezos@amazon.com"],
  ["age", 62],
]);

numeros.forEach(function (valor) {
  console.log(valor);
});

numeros.forEach((valor) => console.log(valor));

mySet.forEach((valor) => console.log(valor));

myMap.forEach((valor) => console.log(valor));
