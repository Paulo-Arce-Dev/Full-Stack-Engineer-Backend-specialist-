# Ejercicios: Tipos de Datos Primitivos

#### 1. Limpieza de Datos (Strings)

Imagina que recibes el nombre de un usuario desde un formulario web muy mal llenado.

- **Dato:** `let entradaUsuario = " mArCos pEreZ ";`
- **Reto:** Debes limpiar los espacios en blanco a los lados y transformar el nombre para que esté todo en mayúsculas.
- **Resultado esperado:** `"MARCOS PEREZ"`

### 2. Buscador de Palabras (Booleans & Strings)

Tienes un texto largo que representa la descripción de un producto.

- **Dato:** `let descripcion = "Este televisor 4K cuenta con tecnología OLED y sonido Dolby Atmos.";`
- **Reto:** Crea una variable booleana llamada `tiene4K` que verifique si la palabra "4K" existe dentro del string (investiga el método `.includes()`).
- **Resultado esperado:** `true` o `false` en consola.

### 3. El Generador de Correos (Manipulación de Strings)

Un cliente nuevo se registra. Tienes su `nombre = "Lucía"` y su `apellido = "García"`.

- **Reto:** Crea un correo electrónico institucional que sea: la inicial del nombre + el apellido + "@empresa.com". Todo debe estar en minúsculas.
- **Pista:** Usa `.charAt(0)` o el acceso por índice `[0]` para la inicial.
- **Resultado esperado:** `"lgarcia@empresa.com"`

### 4. Seguridad de Contraseñas (String Length)

Debes validar si una contraseña es segura.

- **Dato:** `let password = "1234567890abc";`
- **Reto:** Crea una variable booleana llamada `esValida`. Será `true` si la longitud de la contraseña es mayor o igual a 12 caracteres, y `false` si es menor.
- **Resultado esperado:** En este caso, `true`.

### 5. El Azar del Dado (Numbers & Math)

En un juego de mesa, necesitas simular el lanzamiento de un dado de 6 caras.

- **Reto:** Crea una variable `resultadoDado`.
- **Pista:** Investiga cómo usar `Math.random()` y `Math.floor()` para generar un número entero aleatorio entre 1 y 6.

### 6. El Misterio del Null y Undefined

Crea un ejemplo práctico donde:

1. Declares una variable `nombreUsuario` pero no le asignes ningún valor.
2. Declares una variable `preferenciasUsuario` y le asignes explícitamente el valor `null` (porque el usuario eligió no tener preferencias).

- **Reto:** Imprime ambos en consola y usa `typeof` para ver la diferencia de tipos.

### 7. El Formateador de Títulos

Recibes el título de un artículo de un blog en minúsculas y con espacios innecesarios.

- **Dato:** `let tituloSucio = " cómo aprender javascript en 2026 ";`
- **Reto:** Debes limpiar los espacios y lograr que **solo la primera letra** de todo el string esté en mayúscula.
- **Resultado esperado:** `"Cómo aprender javascript en 2026"`
- **Pista:** Necesitarás combinar `.slice()`, `.toUpperCase()` y `.toLowerCase()`

### 8. Extractor de Dominio

Tienes el correo de un cliente y necesitas saber de qué empresa es.

- **Dato:** `let email = "usuario.de.prueba@google.com";`
- **Reto:** Extrae únicamente la parte del dominio que está **después del @**.
- **Pista:** Usa `.indexOf()` para encontrar la posición del "@" y luego `.slice()` para cortar el resto.
- **Resultado esperado:** `"google.com"`

### 9. Validación de "Email Seguro" (Sin IF)

Crea una lógica que determine si un email es "válido" bajo dos condiciones de texto:

- **Condiciones:** Debe contener un "@" Y debe terminar en ".com".
- **Dato:** `let emailAValidar = "contacto@academia.com";`
- **Reto:** Crea una variable booleana `esSeguro` que sea `true` solo si se cumplen ambas (usa `.includes()` y `.endsWith()`).
- **Pista:** Como todavía no vimos operadores lógicos (`&&`), simplemente imprime los dos resultados por separado o intenta investigar cómo se escribe el operador "Y" en JS.

### 10. Ofuscador de Tarjetas de Crédito

Para proteger la seguridad, solo debemos mostrar los últimos 4 dígitos de una tarjeta.

- **Dato:** `let tarjeta = "4548123456789012";`
- **Reto:** Crea una nueva variable que contenga 12 asteriscos y los últimos 4 dígitos de la tarjeta original.
- **Resultado esperado:** `"************9012"`
- **Pista:** Usa `.slice()` con un número negativo para obtener el final del string.

### 11. El Reemplazo de Palabras

Tienes una frase que viene con un error de censura.

- **Dato:** `let frase = "El lenguaje Java es el más usado en la web.";`
- **Reto:** Reemplaza la palabra "Java" por "JavaScript".
- **Condición:** Asegúrate de que si la frase cambia a "Java es genial", el código siga funcionando (usa `.replace()`).
