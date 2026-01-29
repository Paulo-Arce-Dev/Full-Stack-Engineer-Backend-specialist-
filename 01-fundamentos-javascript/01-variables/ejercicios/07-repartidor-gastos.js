// Ejercicio - El Repartidor de Gastos

let cuentaTotal = 15500;
let cantidadPersonas = 5;
let porcentajePropina = 10;

// agregando monto de propina total a la cuenta total
let cantidadPropina = cuentaTotal * (porcentajePropina / 100);
console.log(`La cantidad de la propina total es de: $${cantidadPropina}`);

// monto a pagar de cada persona
let pagoPorPersona = (cuentaTotal + cantidadPropina) / 5;
console.log(`La cantidad a pagar por cada persona es de: $${pagoPorPersona}`);
