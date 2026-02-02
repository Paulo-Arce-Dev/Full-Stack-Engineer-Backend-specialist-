// Ejercicio - Validación de "Email Seguro" (Sin IF)

let emailAValidar = "contacto@academia.com";

let esSeguro = emailAValidar.includes("@") && emailAValidar.endsWith(".com");
console.log(esSeguro);
