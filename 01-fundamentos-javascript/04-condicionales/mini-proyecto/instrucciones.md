# Mini Proyecto - Simulador de Cajero Automático

Simular una transacción bancaria real.

**Instrucciones:**
Declara tres variables:

- `saldoCuenta` (un número, ej: 5000)
- `montoAExtraer` (un número)
- `pinIngresado` (un número)
- `PIN_CORRECTO` (una constante, ej: 1234)

**El Reto (Lógica de negocio):** Crea un sistema que valide los siguientes pasos en orden:

1. **Validación de PIN:** Si el `pinIngresado` no es igual al `PIN_CORRECTO`, debe imprimir: `"PIN incorrecto. Acceso denegado"`.

2. **Validación de Fondos:** Si el PIN es correcto, debe revisar si el `montoAExtraer` es menor o igual al `saldoCuenta`.
   - Si tiene saldo: Resta el monto al saldo y muestra: `"Retiro exitoso. Nuevo saldo: $[saldo]"`.

   - Si no tiene suficiente saldo: Muestra: `"Fondos insuficientes"`.

3. **Límite de Cajero:** (Nivel Pro) Agregá una condición: el cajero no puede entregar más de $20.000 por operación. Si el monto es mayor, debe decir: `"Límite de extracción excedido"`.
