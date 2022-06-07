---
difficulty:
  - newbie
OAs:
  - arrays
---

# Elevator Distance

[https://www.codewars.com/kata/59f061773e532d0c87000d16/train/javascript](https://www.codewars.com/kata/59f061773e532d0c87000d16/train/javascript)

Imagine que você começa no 5º andar de um prédio, depois desce até o 2º andar e
depois volta ao 8º andar. Você percorreu um total de 3 + 6 = 9 andares de
distância.

Dada um array representando uma série de andares que você deve alcançar por
elevador, retorne um número inteiro representando a distância total percorrida
para visitar cada andar na matriz em ordem.

**Exemplos simples**

```js
elevatorDistance([5,2,8]) = 9
elevatorDistance([1,2,3]) = 2
elevatorDistance([7,1,7,1]) = 18

// se dois andares consecutivos são iguais,
// a distância percorrida entre eles é 0
elevatorDistance([3,3]) = 0
```

O array sempre conterá pelo menos 2 andares. Testes aleatórios conterão de 2 a
20 elementos em array e valores de piso entre 0 e 30.
