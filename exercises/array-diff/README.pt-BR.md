---
difficulty:
  - intermediate
OAs:
  - arrays
projects:
  - data-lovers
  - memory-match
---

# Array diff

[https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript](https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript)

Seu objetivo neste exercício é implementar uma função difusa, que
subtrai o conteúdo de um array de outro e retorna o resultado.

Lembre-se que você deve remover todos os valores da matriz `a`, que estão
presentes na matriz `b` enquanto mantém a ordem dos valores na matriz `b`.
na matriz `b`, mantendo a ordem.

__Exemplo 1__

```js
Entrada: a=[1, 2] b=[1]
Saída: [2]
Explicação: subtraindo de [1, 2] o valor corresponde [1] o resultado é [2]
```

__Exemplo 2__

```js
Entrada: a=[1, 2, 2, 2, 3], b=[2]
Saída: [1, 3]
Explicação: subtraindo de [1, 2, 2, 2, 3] o valor corresponde [2] o resultado é [1, 3]
```

> __Importante__ ❗
>
> - Se um valor de `a` está presente em `b`, todos os seus jogos devem ser
> ser removido do `b`
