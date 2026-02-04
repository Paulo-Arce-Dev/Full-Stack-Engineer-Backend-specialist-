// Operadores Aritméticos

let num1 = 5;
let num2 = 10;

console.log(num1 + num2); // Suma
console.log(num1 - num2); // Resta
console.log(num1 * num2); // Multiplicación
console.log(num1 / num2); // División

console.log(num1 % num2); // Módulo
console.log(num1 ** num2); // Exponente

num1++; // Incremento
console.log(num1);

num2--; // Decremento
console.log(num2);

// Operadores de asignacion

let myVariable = 2;
console.log(myVariable);
myVariable += 2; // Suma con asignación
console.log(myVariable);

myVariable -= 2; // Resta con asignación
myVariable *= 2; // Multiplicación con asignación
myVariable /= 2; // División con asignación
myVariable %= 2; // Módulo con asignación
myVariable **= 2; // Exponente con asignación

// Operadores de comparación

console.log(num1 > num2); // Mayor que
console.log(num1 < num2); // Menor que
console.log(num1 >= num2); // Mayor o igual que
console.log(num1 <= num2); // Menor o igual que
console.log(num1 == num2); // Igualdad por valor
console.log(num1 == 6);
console.log(num1 == "6");
console.log(num1 == num1);
console.log(num1 === num1); // Igualdad por identidad (por tipo y valor) o igualdad estricta
console.log(num1 === 6);
console.log(num1 === "6");
console.log(num1 != 6); // Desigualdad por valor
console.log(num1 !== "6"); // Desigualdad por identidad (por tipo y valor) o desigualdad estricta
console.log(0 == false);
console.log(1 == false);
console.log(2 == false);
console.log(0 == "");
console.log(0 == " ");
console.log(0 == "");
console.log(0 == "Hola");
console.log(0 === "");
console.log(undefined == null);
console.log(undefined === null);

/*
Truthy values (valores verdaderos)

- Todos los numeros positivos y negativos menos el cero
- Todas las cadenas de texto menos las vacías
- El boolean true
*/

/*
Falsy values (valores falsos)

- 0
- 0n
- null
- undefined
- NaN (Not a Number)
- El boolean false
- Cadenas de texto vacías 
*/

// Operadores lógicos

// and (&&)
console.log(5 > 10 && 15 > 20);
console.log(5 < 10 && 15 < 20);
console.log(5 < 10 && 15 > 20);
console.log(5 > 10 && 15 > 20 && 30 > 40);

// or (||)
console.log(5 > 10 || 15 > 20);
console.log(5 < 10 || 15 < 20);
console.log(5 < 10 || 15 > 20);
console.log(5 > 10 || 15 > 20 || 30 > 40);

console.log((5 > 10 && 15 > 20) || 30 < 40);

// not (!)
console.log(!true);
console.log(!false);
console.log(!(5 > 10 && 15 > 20));
console.log(!(5 > 10 || 15 > 20));

// Operadores ternarios

const isRaining = false;
isRaining ? console.log("Está lloviendo") : console.log("No está lloviendo");
