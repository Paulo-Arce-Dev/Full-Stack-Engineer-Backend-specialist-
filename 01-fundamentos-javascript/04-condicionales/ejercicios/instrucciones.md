# Ejercicios de Condicionales en JavaScript

### 1. Sistema de Calificaciones

Crea un programa que asigne una letra según la nota de un examen.

- **Dato:** `let nota = 85;`
- **Reto:** Usa `if`, `else if` y `else` para imprimir:
  - "A" si la nota es 90 o más.
  - "B" si está entre 80 y 89.
  - "C" si está entre 70 y 79.
  - "F" si es menor a 70.

### 2. El Simulador de Semáforo

Simula el comportamiento de un semáforo inteligente.

- **Dato:** `let color = "verde";` (puede ser verde, amarillo o rojo).
- **Reto:** Si es "verde", imprime: "¡Avanza!".
  - Si es "amarillo", imprime: "¡Cuidado, frena!".
  - Si es "rojo", imprime: "¡Detente!".
  - Si es cualquier otra cosa (ej: "azul"), imprime: "Semáforo averiado".

### 3. Validador de Inicio de Sesión (Anidado)

Crea una lógica de acceso con dos niveles de seguridad.

- **Datos:** `usuarioValido = true`, `contrasenaCorrecta = false`.
- **Reto:**
  1. Si el usuario es válido, revisa si la contraseña es correcta.
     Si ambos son ciertos, imprime: "Acceso concedido".
     Si el usuario es válido pero la contraseña no, imprime: "Contraseña incorrecta".
  2. Si el usuario no es válido, imprime: "Usuario no encontrado".

### 4. Calculadora de Tarifas de Envío (Lógica y Rangos)

Una empresa de logística cobra según el peso del paquete.

- **Dato:** `let pesoPaquete = 12.5;` (en kg).
- **Reto:**
  - Si pesa menos de 5kg, el costo es $500.
  - Si pesa entre 5kg y 10kg, el costo es $1000.
  - Si pesa más de 10kg, el costo base es $1000 + $200 por cada kilo extra sobre los 10kg.
- **Pista:** Para el tercer caso, deberás hacer una resta (`pesoPaquete - 10`) y luego multiplicar.

### 5. ¿Año Bisiesto? (El desafío de lógica)

Determina si un año es bisiesto.

- **Dato:** `let año = 2026`
- **Reglas:** Un año es bisiesto si:
  - Es divisible por 4.
  - **Pero** no es divisible por 100, **a menos** que también sea divisible por 400.
- **Reto:** Usa condicionales para imprimir "Es bisiesto" o "No es bisiesto".

### 6. El Asistente de Menú (Switch)

Investiga y usa la estructura `switch` para este ejercicio.

- **Dato:** `let opcionMenu = 2;`
- **Reto:**
  1. "Ver perfil".
  2. "Configuración".
  3. "Cerrar Sesión".
     Cualquier otro número: "Opción no válida".

### 7. Verificador de Triángulos (Complejidad Geométrica)

Dados tres lados de un triángulo (`ladoA`, `ladoB`, `ladoC`), determina su tipo.

- **Reto:** Si los tres lados son iguales: "Equilátero".
  - Si solo dos son iguales: "Isósceles".
  - Si todos son distintos: "Escaleno".
- **Condición extra:** Primero verifica si los lados realmente pueden formar un triángulo (la suma de dos lados siempre debe ser mayor al tercero).
