// Sistema de Acceso a Préstamo Bancario

const nombreCompleto = "Marco Aurelio";
let salarioMensual = 2500;
let tieneDeudasPendientes = false;
let antiguedadLaboralMeses = 18;
let montoSolicitado = 10000;
let esClientePremium = false;

let requisitosBasicos = salarioMensual > 2000 && antiguedadLaboralMeses >= 12;

let puntajeCredito = !tieneDeudasPendientes;

let estadoPrestamo =
  requisitosBasicos && puntajeCredito
    ? "APROBADO"
    : esClientePremium && salarioMensual > 5000
      ? "EN REVISIÓN"
      : "RECHAZADO";

let cuotaMensual = montoSolicitado / 12;
cuotaMensual *= 1.05;

let resultado = `
======== BANCO JS - ESTADO DE CRÉDITO ========
Cliente: ${nombreCompleto}
Monto Solicitado: $${montoSolicitado}
Cuota Estimada (12 meses): $${cuotaMensual.toFixed(2)}
----------------------------------------------
Resultado del análisis: ${estadoPrestamo}
==============================================
`;
console.log(resultado);
