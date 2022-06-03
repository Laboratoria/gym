---
difficulty:
  - beginner
OAs:
  - objects
projects:
  - data lovers
  - memory match
  - emergency room
---

# Job Matching

[https://www.codewars.com/kata/56c22c5ae8b139416c00175d/train/javascript](https://www.codewars.com/kata/56c22c5ae8b139416c00175d/train/javascript)

Vamos construir um sistema de matchmaking que ajude a descobrir empregos para
desenvolvedores com base em uma série de fatores.

Um dos fatores mais simples, porém mais importante, é a compensação.
Como desenvolvedores, sabemos quanto dinheiro precisamos para sustentar nosso
estilo de vida, por isso geralmente temos uma ideia aproximada do salário mínimo
com o qual ficaríamos satisfeitos.

Vamos tentar isso. Vamos criar uma função de `match` que leva um `candidate` e
um `job`, que retornará um booleano indicando se o emprego deu match com o
candidato.

Um candidato terá um salário mínimo, que terá este formato:

```js
let candidate = {
  minSalary: 120000
}
```

Um emprego terá um salário máximo, que terá este formato:

```js
let job = {
  maxSalary: 140000
}
```

Para que o match seja válido, o salário máximo do cargo deve ser maior ou igual
ao salário desejado do candidato. No entanto, vamos incluir 10% de margem
de redução do salário mínimo do candidato para chegar a um acordo com a empresa.

> __Importante__ ❗
>
> Se o salário mínimo do candidato ou o salário máximo do trabalho não estiver
> presente, retorne um erro.

__Exemplo__

```js
Entradas: { minSalary: 190000 } { maxSalary: 171000 }
resultados: true
explicação: "O candidato fixa um salário mínimo de 190.000 menos 19.000 correspondente à margem de 10% deixa 171.000 e este é igual ao salário máximo de 171.000, pelo que regressamos à realidade."
```
