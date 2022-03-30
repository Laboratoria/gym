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

[https://the-winter.github.io/codingjs/exercise.html?name=love6&title=Logic-1](https://the-winter.github.io/codingjs/exercise.html?name=love6&title=Logic-1)

Dadas duas matrizes de ints ordenadas em ordem crescente,
retorna true se todos os números na segunda matriz
aparecem no primeiro.

Nota: A melhor solução torna uma única passagem "linear"
por ambas as matrizes, aproveitando o fato de que ambas as matrizes
já estão encomendados.

__Ejemplo__

```js
    linearIn([1, 2, 4, 6], [2, 4]) → true
    linearIn([1, 2, 4, 6], [2, 3, 4]) → false
    linearIn([1, 2, 4, 4, 6], [2, 4]) → true
```


