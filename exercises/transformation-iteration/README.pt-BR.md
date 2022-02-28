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

Escreva uma função que receba duas strings como parâmetros e transforme a string
`source` na string `target`, retornando um array de strings de cada iteração.

__Exemplos__

```js
transform('car','see') ➞ ["car", "sar", "ser", "see"]
transform('casa','muro') ➞ ["casa", "masa", "musa","mura","muro"]
transform('floor','brake') ➞ ["floor", "bloor", "broor", "braor", "brakr", "brake"]
transform('kata','math') ➞ ["kata", "mata", "math"]
```

> __Importante__ ❗
>
> - Você deverá retornar um array com as strings correspondentes a cada iteração.
> - "source" e "target" terão sempre o mesmo comprimento
> - Se uma letra em "source" corresponder a outra letra em "target" no momento da
> iteração, então não há transformação de letras
