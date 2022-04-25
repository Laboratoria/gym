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

Dadas dois arrays de ints classificados em ordem crescente, `outer` e `inner`,
retorne `true` se todos os números em `inner` aparecerem em `outer`. A melhor
solução faz apenas uma única passagem "linear" de ambos os arrays, aproveitando
o fato de que ambos os arrays já estão em ordem de classificação.

**Exemplo**

```js
    linearIn([1, 2, 4, 6], [2, 4]) → true
    linearIn([1, 2, 4, 6], [2, 3, 4]) → false
    linearIn([1, 2, 4, 4, 6], [2, 4]) → true
```
