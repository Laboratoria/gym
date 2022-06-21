---
difficulty:
  - newbie
---

# Closest Elevator

[https://www.codewars.com/kata/5c374b346a5d0f77af500a5a/train/javascript](https://www.codewars.com/kata/5c374b346a5d0f77af500a5a/train/javascript)

Dados 2 elevadores (denominados "left" e "right") em um prédio de 3 andares
(numerados de `0` a `2`), escreva uma função elevator aceitando 3 argumentos
(na ordem):

- `left` - O andar atual do elevador `left`
- `right` - O andar atual do elevador `right`
- `call` - O andar que chamou o elevador

Deve retornar o nome do elevador mais próximo do andar chamado
(`"left"` / `"right"`).

No caso de ambos os elevadores estarem igualmente distantes do piso chamado,
escolha o elevador `right`.

Você pode assumir que as entradas sempre serão inteiros válidos entre 0-2.

**Exemplos:**

```js
elevator(0, 1, 0); // => "left"
elevator(0, 1, 1); // => "right"
elevator(0, 1, 2); // => "right"
elevator(0, 0, 0); // => "right"
elevator(0, 2, 1); // => "right"
```
