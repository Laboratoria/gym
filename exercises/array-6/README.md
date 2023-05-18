---
difficulty:
  - intermediate
OAs:
  - strings
  - recursion
projects:
  - md-links
---

# Array 6

[https://the-winter.github.io/codingjs/exercise.html?name=array6&title=Recursion-1](https://the-winter.github.io/codingjs/exercise.html?name=array6&title=Recursion-1)

Dada una matriz de entes, calcule recursivamente si la matriz contiene un 6. Utilizaremos la convención de considerar sólo la parte de la matriz que comienza en el índice dado. De esta forma, una llamada recursiva puede pasar índice+1 para moverse hacia abajo en la matriz. La llamada inicial pasará índice como 0.

Ejemplos

    array6([1, 6, 4], 0) → true
    array6([1, 4], 0) → false
    array6([6], 0) → true
