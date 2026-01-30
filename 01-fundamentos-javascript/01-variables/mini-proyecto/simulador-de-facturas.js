// Mini proyecto - Simulador de Facturas Simplificada

// datos del negocio
const NOMBRE_TIENDA = "TIENDA DE SOFTWARE";
const SLOGAN = "Tu código, nuestro mundo";

// datos de ventas
let producto1 = "Teclado mecánico";
let precioProducto1 = 2000;

let producto2 = "Mouse";
let precioProducto2 = 1500;

let producto3 = 'Monitor 24"';
let precioProducto3 = 10000;

// calculos

// subtotal
let subTotal = precioProducto1 + precioProducto2 + precioProducto3;

// descuento fijo del local
const descuentoFijo = 500;

// iva
const IVA = (subTotal - descuentoFijo) * 0.21;

// precio final
let precioFinal = subTotal - descuentoFijo + IVA;

let factura = ` 
      *** ${NOMBRE_TIENDA} ***
       "${SLOGAN}"
------------------------------------------
Producto 1: ${producto1} - $${precioProducto1.toFixed(2)}
Producto 2: ${producto2} - $${precioProducto2.toFixed(2)}
Producto 3: ${producto3} - $${precioProducto3.toFixed(2)}
------------------------------------------
Subtotal: $${subTotal.toFixed(2)}
Descuento: $${descuentoFijo.toFixed(2)}
IVA (21%): $${IVA.toFixed(2)}
------------------------------------------
TOTAL A PAGAR: $${precioFinal.toFixed(2)}
------------------------------------------
¡Gracias por tu compra!
`;
console.log(factura);
