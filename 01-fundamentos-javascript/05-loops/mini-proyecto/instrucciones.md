# Mini Proyecto: Analizador de Ventas Semanales

simular que procesamos las ventas de una semana.

**Instrucciones:**

Crea un script que haga lo siguiente:

1. **Simulación de Datos:** Crea un bucle que recorra los días de la semana (del 1 al 7).

2. **Generación de Ventas:** En cada día, genera un monto de venta aleatorio entre $1.000 y $10.000.
   - Pista: Usa `Math.floor(Math.random() * (10000 - 1000 + 1) + 1000)`.

3. **Lógica de Negocio:**
   - Debes ir sumando todas las ventas en una variable `totalVentas`.
   - Si la venta de un día es mayor a $7.000, imprime: `"Día [número]: $[monto] - ¡Excelente venta!"`.
   - Si la venta es menor a $3.000, imprime: `"Día [número]: $[monto] - Venta baja"`.
   - Para los demás montos, solo imprime el día y el monto.

4. **Resumen Final:** Al terminar el bucle (fuera de él), muestra el total acumulado de la semana y el promedio de venta diario.

**Ejemplo salida esperada:**

```
Día 1: $4500
Día 2: $8200 - ¡Excelente venta!
Día 3: $2100 - Venta baja
...
----------------------------
Total de la semana: $35400
Promedio diario: $5057.14
----------------------------
```
