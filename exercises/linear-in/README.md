---
difficulty:
  - intermediate
OAs:
  - arrays
projects:
  - data-lovers
  - memory-match
---

# linearIn

[https://the-winter.github.io/codingjs/exercise.html?name=linearIn&title=Array-3](https://the-winter.github.io/codingjs/exercise.html?name=linearIn&title=Array-3)

Dados dos arrays de ints ordenados de forma creciente,
devuelve true si todos os números do segundo array
aparecen em el primero.

Nota: La mejor solución hace una sola pasada "lineal"
por ambas matrizes, aprovechando que ambas matrizes
ya está ordenado.

**Ejemplo**

```js
    linearIn([1, 2, 4, 6], [2, 4]) → true
    linearIn([1, 2, 4, 6], [2, 3, 4]) → false
    linearIn([1, 2, 4, 4, 6], [2, 4]) → true
```
