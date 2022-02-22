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

Dada uma frase, retorne o número de palavras que possuem a primeira e a última
letra iguais..

Ejemplos:

```js
countSameEnds("Pop! goes the balloon") // => 1

countSameEnds("And the crowd goes wild!") // => 0

countSameEnds("No I am not in a gang.") // => 1
```

Notas

- Não conte palavras de um único caractere (como "I" e "A" no exemplo 3).
- A função não deve fazer distinção entre maiúsculas e minúsculas, o que
significa que a letra "P" maiúscula deve corresponder ao "p" minúsculo.
- Cuidado com a pontuação!.
- Pontos extras se usar expressões regulares!
