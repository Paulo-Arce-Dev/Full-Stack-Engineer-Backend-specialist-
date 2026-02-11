# Ejercicios de Funciones

### 1. El Validador de Usuarios

Crea una función llamada `esUsuarioValido` que reciba un `nombre` y una `longitudMinima`.

- **Reto:** La función debe devolver `true` si el nombre es más largo que la longitud mínima, y `false` si no.
- **Extra:** Usá el operador ternario dentro de la función.

### 2. El Mini-Cajero Automático (Encapsulado)

Crea una función llamada `realizarRetiro` que reciba `saldoActual` y `montoARetirar`.

- **Reto:** Si el monto es menor o igual al saldo, debe devolver el **nuevo saldo**.
  - Si el monto es mayor al saldo, debe devolver el string: `"Fondos insuficientes"`.

### 3. El Contador de Letras "A"

Crea una función llamada `contarLetrasA` que reciba un `texto`.

- **Reto:** Debe usar un bucle `for` para recorrer el texto y contar cuántas veces aparece la letra "a" (minúscula o mayúscula).
- **Pista:** Los strings se pueden recorrer como arrays: `texto[i]`.

### 4. Generador de Promedios

Crea una función llamada `calcularPromedio` que reciba tres notas.

- **Reto:** Debe devolver el promedio. Luego, usa otra función llamada `darEstado` que reciba ese promedio y devuelva `"Aprobado"` (si es 6 o más) o `"Reprobado"`.
- **Meta:** ¡Tenés que llamar a una función dentro del argumento de la otra!
