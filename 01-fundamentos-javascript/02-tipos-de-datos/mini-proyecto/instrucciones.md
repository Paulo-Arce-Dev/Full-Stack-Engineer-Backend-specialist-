# Mini Proyecto: Perfil de Usuario Pro

**Instrucciones:**

Crea un script que reciba las siguientes variables (puedes inventar los datos):

- `nombreCompleto` (ej: `" anA lUciA gOmEz "`)
- `edad` (ej: `28`)
- `biografia` (ej: `"Me encanta programar en Python y JS"`)
- `idRegistro` (un número aleatorio largo, ej: 54829)

**Reto:**

1. **Normalización de Nombre:** Limpia los espacios y asegúrate de que el nombre esté en formato "Mayúsculas" para un carnet (ANNA LUCIA GOMEZ).
2. **Generación de Username:** Crea un nombre de usuario que sea el nombre (sin apellido), en minúsculas y seguido del `idRegistro`. (Pista: usa `.split(" ")[0]` para obtener la primera palabra).
3. **Censura de Bio:** Reemplaza la palabra "Python" por "JavaScript" en la biografía (solo por diversión).
4. **Resumen de Seguridad:** Crea una variable booleana que verifique si la biografía es larga (más de 30 caracteres).
5. **Output Final:** Imprime un "Perfil de Usuario" formateado.

**Debe verse así en consola:**

```
===== PERFIL DE USUARIO =====
NOMBRE: ANA LUCIA GOMEZ
USERNAME: ana54829
BIO: Me encanta programar en JavaScript y JS
¿BIO LARGA?: true
=============================
```
