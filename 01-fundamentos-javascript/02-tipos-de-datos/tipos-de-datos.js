// Tipos de Datos

// Primitivos
// - Datos en los que se fundamenta nuestra interacción con el lenguaje
// - Son datos básicos
// - Inmutables
// - Representan un solo valor

// String - cadena de texto
const nombre = "Elon Musk";
let email = "elonmusk@tesla.com";

// Number - Números
let edad = 54; // Entero
let altura = 1.88; // Decimal

// Boolean - Booleanos
let esEmpresario = true;
let esProfesor = false;

// Undefined - Indefinido
let undefineValue;

// Null - Nulo
let nullValue = null;

// Symbol
let mySymbol = Symbol("mysymbol");

// BigInt
let myBigInt = BigInt(817239871289371986589716389471628379612983761289376129);
let myBigInt2 = 817239871289371986589716389471628379612983761289376129n;

// Mostramos los tipos de datos
console.log(typeof nombre);
console.log(typeof email);

console.log(typeof edad);
console.log(typeof altura);

console.log(typeof esEmpresario);
console.log(typeof esProfesor);

console.log(typeof undefineValue);

console.log(typeof nullValue);

console.log(typeof mySymbol);

console.log(typeof myBigInt);
console.log(typeof myBigInt2);
