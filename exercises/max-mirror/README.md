---
difficulty:
  - advanced
OAs:
  - arrays
projects:
  - md-links
---

# Max Mirror

[https://the-winter.github.io/codingjs/exercise.html?name=maxMirror&title=Array-3](https://the-winter.github.io/codingjs/exercise.html?name=maxMirror&title=Array-3)

Diremos que una sección "espejo" en una matriz es un grupo
de elementos contiguos tal que en algún lugar de la matriz
aparece el mismo grupo en orden inverso. Por ejemplo, la
sección espejo más grande en {1, 2, 3, 8, 9, 3, 2, 1} es
de longitud 3 (la parte {1, 2, 3}). Devuelve el tamaño
de la mayor sección especular encontrada en el array dado.

Ejemplos

    maxMirror([1, 2, 3, 8, 9, 3, 2, 1]) → 3
    maxMirror([1, 2, 1, 4]) → 3
    maxMirror([7, 1, 2, 9, 7, 2, 1]) → 2
