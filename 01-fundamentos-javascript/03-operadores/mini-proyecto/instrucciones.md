# Mini Proyecto: "Simulador de Factura Simplificada"

**Instrucciones:**
Declara las siguientes variables del cliente:

- `salarioMensual`
- `tieneDeudasPendientes` (booleano)
- `antiguedadLaboral` (en meses)
- `montoSolicitado`
- `esClientePremium` (booleano)

**El Reto (La Lógica):** El sistema debe decidir si el préstamo está Aprobado, En Revisión o Rechazado siguiendo estas reglas:

1. **Variable** `requisitosBasicos`: Debe ser un booleano que verifique si el `salarioMensual` es mayor a 2000 Y la `antiguedadLaboral` es de al menos 12 meses.

2. **Variable** `puntajeCredito`: Debe verificar si el cliente **NO** tiene deudas pendientes (`!tieneDeudasPendientes`).

3. **Variable** `estadoPrestamo`: Usa **operadores ternarios encadenados** para asignar el resultado:
   - Si tiene los `requisitosBasicos` **Y** el `puntajeCredito` es bueno: **"APROBADO"**.
   - Si no cumple lo anterior, pero `esClientePremium` es `true` **Y** el `salarioMensual` es muy alto (mayor a 5000): **"EN REVISIÓN"**.
   - En cualquier otro caso: **"RECHAZADO"**.

4. **Variable** `cuotaMensual`: Calcula el monto solicitado dividido 12 (meses), pero sumale un 5% de interés usando `*= 1.05`.

```
Output Final esperado (en un solo console.log con Template Literal):
======== BANCO JS - ESTADO DE CRÉDITO ========
Cliente: [Nombre Inventado]
Monto Solicitado: $[monto]
Cuota Estimada (12 meses): $[cuota]
----------------------------------------------
Resultado del análisis: [Estado del Prestamo]
==============================================
```
