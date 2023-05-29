---
difficulty:
  - intermediate
OAs:
  - strings
  - recursion
projects:
  - md-links
---

# XY Balance

[https://the-winter.github.io/codingjs/exercise.html?name=xyBalance&title=String-2](https://the-winter.github.io/codingjs/exercise.html?name=xyBalance&title=String-2)

Diremos que uma cadeia de caracteres é xy-balanced se,
para todos os caracteres 'x' da cadeia, houver um caractere
'y' em algum ponto posterior da cadeia. Portanto, "xxy"
é balanceada, mas "xyx" não é. Um 'y' pode equilibrar
vários 'x'. Retornará true se a cadeia de caracteres
fornecida for balanceada com xy.

Exemplos

    xyBalance('aaxbby') → true
    xyBalance('aaxbb') → false
    xyBalance('yaaxbb') → false
