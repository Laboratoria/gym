---
difficulty:
  - newbie
OAs:
  - strings
  - conditionals
projects:
  - cipher
  - card validation
---

# comboString

[https://the-winter.github.io/codingjs/exercise.html?name=comboString&title=String-1](https://the-winter.github.io/codingjs/exercise.html?name=comboString&title=String-1)

Dadas 2 strings, a e b, retorne uma string no formato `curta+longa+curta`, com
a string mais curta no exterior e a string mais longa no interior. As strings
não terão o mesmo comprimento, mas podem estar vazias (comprimento 0).

**Exemplo:**

```js
    comboString('Hello', 'hi') → "hiHellohi"
    comboString('Hi', 'Hello') → "HiHelloHi"
    comboString('aaa', 'b') → "baaab"
```
