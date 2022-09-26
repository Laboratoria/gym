---
difficulty:
  - beginner
OAs:
  - arrays
  - Métodos de arrays
projects:
  - data-lovers
  - memory-match
---

# List Filtering

[https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript](https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript)

Neste exercício, você criará uma função que recebe uma lista de inteiros e
strings não negativos e retorna uma nova lista com as strings filtradas.

__Exemplo:__

```JS
filter_list([1,2,'a','b']) == [1,2]

// Explicação

Entrada: [1,2,'a','b']
Saída: [1,2]
Explicação: A partir da entrada [1,2,'a','b'] a matriz é filtrada apenas para
  tem números positivos e retorna [1,2]
```

> __Importante__ ❗
>
> - Considere o tipo de dados ao filtrar, mesmo que a matriz inclua `'1'`, esta
> é uma string e você não deve incluí-la no resultado final.
