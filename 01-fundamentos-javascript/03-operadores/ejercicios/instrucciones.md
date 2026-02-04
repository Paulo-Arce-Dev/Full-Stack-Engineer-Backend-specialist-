# Ejercicios de Operadores en JavaScript

### 1. Seguridad de Discoteca (Comparación y Lógica)

Debes decidir si una persona puede entrar a un club.

- **Datos:** `edad = 19`, `tieneEntrada = true`, `estaEnListaDeEspera = false`.
- **Reto:** Crea una variable booleana `puedeEntrar`. La regla es: debe ser mayor de edad (18 o más) **Y** (tener entrada **O** estar en lista de espera).
- **Resultado:** Imprime `puedeEntrar` en consola.

### 2. Validador de Precios (Asignación Compuesta)

Eres el dueño de una tienda y aplicas recargos o descuentos según el método de pago.

- **Datos:** `precioBase = 1000`.
- **Reto:** 1. Si paga con tarjeta, el precio sube un 10% (usa `+=` o `*=`). 2. Si después decide usar un cupón de descuento, el precio baja $200 (usa `-=`).
- **Resultado:** Imprime el precio final tras ambas operaciones.

### 3. Sistema de Becas (Lógica Compleja)

Un estudiante pide una beca.

- **Datos:** `promedio = 8.5`, `ingresosFamiliares = 400000`, `distanciaEscuela = 30`.
- **Reto:** Crea una variable `esElegible`. Los requisitos son: Tener un promedio superior a 8 Y (ganar menos de 500.000 O vivir a más de 20km de la escuela).
- **Resultado:** Imprime el valor booleano.

### 4. ¿Es Par o Impar? (Módulo y Ternario)

Recibes un número de un sensor.

- **Dato:** `let numero = 15;`
- **Reto:** Crea una variable `resultado` que guarde el string "Par" o "Impar" usando exclusivamente el operador ternario.
- **Pista:** Usa el operador de módulo `% 2`.

### 5. El Juego de las Ofertas (Ternario Encadenado)

Una tienda tiene descuentos según la cantidad comprada.

- **Dato:** `let cantidadComprada = 12;`
- **Reto:** Crea una variable `descuento` que sea:
  - "20%" si compra 10 o más unidades.
  - "10%" si compra entre 5 y 9 unidades.
  - "Sin descuento" si compra menos de 5.
- **Condición:** Usa operadores ternarios (puedes encadenar uno dentro de otro).

### 6. Igualdad Estricta vs Débil (Investigación)

Imagina que recibes un ID de una base de datos como string `"100"` y el usuario ingresa el número `100`.

- **Datos:** `idDB = "100"`, `idIngresado = 100`.
- **Reto:** Crea dos variables: `comparacionDebil` (usa `==`) y comparacionEstricta (usa ===).
- **Resultado:** Imprime ambas y observa la diferencia. ¿Cuál crees que es más segura para un sistema de login?

### 7. Verificador de Stock (Operador NOT)

Tienes una variable `stockDisponible = 0`.

- **Reto:** Crea una variable `hayQueReponer` que sea el inverso lógico de la existencia de stock.
- **Pista:** Usa el operador `!` sobre el valor booleano del stock (recuerda que 0 es "falsy").
