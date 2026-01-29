# Ejercicios de Variables en JavaScript

### 1. El Cambalache (Lógica de asignación)

Tienes dos variables: cajaA con el valor "Libros" y cajaB con el valor "Ropa".

- Reto: Intercambia los valores de las variables de modo que cajaA tenga "Ropa" y cajaB tenga "Libros".
- Condición: No puedes escribir manualmente los strings de nuevo. Debes usar una variable auxiliar.

### 2. El Validador de Datos (Tipos de datos)

Crea un script donde declares variables para los siguientes datos de un usuario:

- Nombre, Edad, ¿Es mayor de edad? (Booleano), Fecha de nacimiento, Ciudad.
- Reto: Usa console.log(typeof nombreVariable) para imprimir el tipo de cada una y verificar que sean correctos.

### 3. El Contador de Inventario (Mutabilidad)

Imagina que trabajas en un depósito:

- Declara una variable para la cantidadDeProductos.
- Simula que llegan 10 productos nuevos (suma).
- Simula que se venden 3 productos (resta).
- Reto: Usa el tipo de declaración de variable correcto para permitir que el valor cambie.

### 4. El Calculador de IVA (Constantes)

Crea un programa que calcule el precio final de un producto:

- Declara una constante para el impuesto (ej. 0.21).
- Declara una variable para el precioBase.
- Reto: Calcula el precioFinal y muestra el resultado. Intenta luego cambiar el valor del impuesto y observa qué sucede.

### 5. Mensaje de Bienvenida (Template Literals)

Declara tres variables: usuario, actividad y tiempo.

- Reto: Crea una variable mensaje que una todo usando Template Literals (comillas invertidas) para formar la frase: "Hola [usuario], hoy completaste tu rutina de [actividad] en [tiempo]. ¡Buen trabajo!".

### 6. El Conversor de Temeratura

Crea un script que convierta grados Celcius en Fahrenheit y Kevlin.

- Datos: Una variable celcius = 25.
- Fórmula: Fahrenheit: $(Celsius \times 9/5) + 32$
  - Kevin: $Celsius + 273.15$
- Reto: Muestra un solo mensaje que diga: "25°C equivalen a 77°F y 298.15K". Si cambias el valor de celsius, el mensaje debe actualizarse solo.

### 7. El Repartidor de Gastos

Un grupo de 5 amigos sale a comer. La cuenta total es de $15.500. Deciden dejar el 10% de propina.

- Reto: Declara variables para cuentaTotal, cantidadPersonas y porcentajePropina.
- Calcula cuánto debe pagar cada persona (incluyendo la propina) y guárdalo en una variable llamada pagoPorPersona.
- Muestra el resultado con un mensaje descriptivo.

### 8. Calculadora de Tiempo (Segundos a Minutos)

Tienes una variable que representa una duración en segundos: totalSegundos = 425.

- Reto: Calcula cuántos minutos completos hay en esos segundos y cuántos segundos sobran.
- Pista: Usa el operador de división / y el operador de módulo % (que te da el resto de una división).
- Resultado esperado: "425 segundos son 7 minutos y 5 segundos".

### 9. Generador de Nombre de Archivo

Tienes tres variables: fecha (ej: "2026-01-29"), nombreProyecto (ej: "SistemaVentas") y version (ej: 3).

- Reto: Crea una variable nombreArchivo que combine todo para que se vea así: 2026-01-29_SistemaVentas_v3.zip.
- Restricción: Asegúrate de que la versión siempre tenga la "v" adelante y la extensión ".zip" al final.

### 10. El Área de un Círculo

Declara una variable para el radio de un círculo.

- Reto: Calcula el área del círculo.
- Fórmula: $Area = \pi \times radio^{2}$ (puedes usar $3.1416$ para $\pi$ o investigar Math.PI).
- Muestra el resultado en un mensaje.
