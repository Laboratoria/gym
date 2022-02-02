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

Implementar a função `comboString' para que ela receba duas cordas, a e b, e
retornar um fio da forma 'curto + longo + curto', com o fio mais curto no
fio no exterior e o fio mais longo no interior. As cordas não
ser de igual comprimento, mas pode estar vazio (comprimento 0).

__Exemplo:__

```js
    comboString('Hello', 'hi') → "hiHellohi"
    comboString('Hi', 'Hello') → "HiHelloHi"
    comboString('aaa', 'b') → "baaab"
```
