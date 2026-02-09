# Ejercicios de Loops (Bucles)

1. **El Contador de Despegue (Ciclo `for`)**

Necesitamos una cuenta regresiva para el lanzamiento de un cohete.

- **Reto:** Crea un bucle `for` que cuente del 10 al 1.
- **Resultado esperado:** En cada iteración, debe imprimir: `"Despegue en 10...", "Despegue en 9..."`, etc. Al terminar el bucle, debe imprimir: `"¡DESPEGUE! 🚀"`.

2. **La Tabla de Multiplicar (Ciclo `for`)**

Genera la tabla de multiplicar de un número específico.

- **Dato:** `let numeroTabla = 7;`
- **Reto:** Crea un bucle que imprima la tabla del 7 (del 1 al 10).
- **Resultado esperado:** `"7 x 1 = 7", "7 x 2 = 14"`, etc.

3. **Suma Acumulativa (Ciclo `while`)**

Imagina que estás sumando monedas en una alcancía hasta llegar a una meta.

- **Datos:** `let suma = 0;`, `let contador = 1;`
- **Reto:** Usa un `while` para sumar los números del 1 al 20 (1+2+3...+20).
- **Resultado esperado:** Imprime el total final al terminar el bucle.

4. **Filtrar Números Pares (Loop + Condicional)**

A veces solo queremos procesar ciertos datos de una lista.

- **Reto:** Crea un bucle `for` que recorra los números del 1 al 30.
- **Condición:** Solo debe imprimir en consola aquellos números que sean pares.
- **Pista:** Usa el operador de módulo `% 2 === 0`.

5. **El Validador de "Pin" Infinito (Simulación `while`)**

Queremos simular un sistema que pide un PIN hasta que sea correcto (pero para no trabar el navegador, solo lo haremos con una variable).

- **Datos:** `let pinIngresado = 0;`, `const PIN_CORRECTO = 1234;`
- **Reto:** Crea un `while` que "incremente" el `pinIngresado` de 100 en 100 hasta que alcance o supere al `PIN_CORRECTO`.
- **Resultado esperado:** En cada intento imprime: `"PIN [numero] incorrecto, intentando de nuevo..."`. Al final imprime: `"Acceso concedido"`.

6. **Saltando Obstáculos (`break` y `continue`)**

Este ejercicio es para dominar el control del bucle.

- **Reto:** Crea un `for` del 1 al 10.
- **Condiciones:** 1. Si el número es 5, usa `continue` para saltarlo (no debe imprimirse). 2. Si el número es 8, usa break para detener el bucle por completo.
- **Resultado esperado:** Deberías ver: 1, 2, 3, 4, 6, 7.

7. **El Dibujante de Triángulos (Loop Anidado)**

Este es el desafío de lógica más fuerte de esta sección.

- **Reto:** Usa dos bucles `for` (uno dentro de otro) para dibujar un triángulo de asteriscos en la consola.
- **Resultado esperado:**

```
*
**
***
****
*****
```

- **Pista:** El primer bucle controla las filas y el segundo (el de adentro) cuántos asteriscos se imprimen en esa fila.
