---
difficulty:
  - beginner
OAs:
  - strings
projects:
  - cipher
  - card validation
---

# Same on both ends

[https://edabit.com/challenge/JDDeK9jSFKJbfzhMt](https://edabit.com/challenge/JDDeK9jSFKJbfzhMt)

Dada uma frase, devolver o número de palavras cujas primeira e última letras são
**é igual a**.

Ejemplos:

```js
countSameEnds("Pop! goes the balloon") // => 1

countSameEnds("And the crowd goes wild!") // => 0

countSameEnds("No I am not in a gang.") // => 1
```

Notas

- Não contar palavras que tenham apenas um caráter (como "I" e "a" no exemplo 3).
  no exemplo 3).
- A função não deve ser _sensível à caixa_, ou seja, a maiúscula "P" deve
  corresponder à letra minúscula "p".
- Tome cuidado com os sinais de pontuação ou outros caracteres que não sejam letras.
- Pontos" extras se você usar expressões regulares!
