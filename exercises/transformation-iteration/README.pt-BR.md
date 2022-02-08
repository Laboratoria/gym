---
difficulty:
  - beginner
OAs:
  - strings
  - arrays
projects:
  - cipher
  - card validation
---

# Transformation iteration

[https://www.codewars.com/kata/5872d59caa042821100001f8/train/javascript](https://www.codewars.com/kata/5872d59caa042821100001f8/train/javascript)

Escreva uma função que receba duas cordas como parâmetros e as itere para
transformam a string "fonte" e terminam convertendo-a para a string "alvo".
resultado de cada iteração armazenam-no em uma matriz.

__Exemplos__

```js
transform('car','see') ➞ ["car", "sar", "ser", "see"]
transform('casa','buho') ➞ ["casa", "basa", "busa","buha","buho"]
transform('floor','brake') ➞ ["floor", "bloor", "broor", "braor", "brakr", "brake"]
transform('kata','math') ➞ ["kata", "mata", "math"]
```

> __Importante__ ❗

> - Você deve devolver uma matriz com as cordas correspondentes a cada iteração.
> - "fonte" e "alvo" terão sempre o mesmo comprimento
> - Se uma letra em 'fonte' corresponder a outra letra em 'alvo' no momento da iteração
> então não há transformação de cartas
