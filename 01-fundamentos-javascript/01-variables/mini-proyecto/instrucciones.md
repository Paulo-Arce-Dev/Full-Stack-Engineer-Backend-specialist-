# Mini Proyecto: "Simulador de Factura Simplificada"

El objetivo es crear un generador de tickets para un cliente.

**Instrucciones para tu archivo de proyecto:**
Crea un script que realice lo siguiente:

1. **Datos del Negocio:** Declara constantes para el `NOMBRE_TIENDA` y el `SLOGAN`.
2. **Datos de Venta:** Declara variables para tres productos distintos (nombre y precio de cada uno). Ejemplo: `producto1`, `precio1`, etc.
3. **Cálculos:**

- Suma los precios para obtener un `subtotal`.
- Calcula un `descuentoFijo` (por ejemplo, $500 que se le restan al subtotal).
- Calcula el `iva` (21%) sobre el valor tras el descuento.
- Obtén el `precioFinal`.

4. **Formato de salida:** Debes imprimir en la consola un "Ticket" visualmente organizado usando **un solo** `console.log` y un solo **Template Literal** (usando saltos de línea con `Enter` dentro de las comillas invertidas).

**El resultado debería verse así en la consola:**

```
      *** TIENDA DE SOFTWARE ***
       "Tu código, nuestro mundo"
------------------------------------------
Producto 1: Teclado Mecánico - $2000
Producto 2: Mouse Gamer - $1500
Producto 3: Monitor 24" - $10000
------------------------------------------
Subtotal: $13500
Descuento: $500
IVA (21%): $2730
------------------------------------------
TOTAL A PAGAR: $15730
------------------------------------------
¡Gracias por tu compra!

```

**Reto Extra:** Intenta que todos los precios en el ticket final muestren solo 2 decimales usando `toFixed(2)`.
