---
difficulty:
  - intermediate
OAs:
  - arrays
  - recursion
projects:
  - md-links
---

# Array 6

[https://the-winter.github.io/codingjs/exercise.html?name=array6&title=Recursion-1](https://the-winter.github.io/codingjs/exercise.html?name=array6&title=Recursion-1)

Dada uma matriz de números inteiros, calcule recursivamente se
a matriz contém um 6. Usaremos a convenção de considerar apenas
a parte da matriz que começa no índice fornecido. Dessa forma,
uma chamada recursiva pode passar o índice+1 para descer na matriz.
A chamada inicial passará o índice como 0.

Exemplos

    array6([1, 6, 4], 0) → true
    array6([1, 4], 0) → false
    array6([6], 0) → true
