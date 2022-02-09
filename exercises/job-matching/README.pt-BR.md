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
estilo de vida, por isso geralmente temos uma idéia aproximada do salário mínimo
com o qual ficaríamos satisfeitos.

Vamos tentar isso. Vamos criar uma correspondência de função que leva um
candidato e um emprego, que retornará um booleano indicando se o emprego é uma
correspondência válida para o candidato.

Um candidato terá um salário mínimo, pelo que terá este aspecto:

```js
let candidate = {
  minSalary: 120000
}
```

Um emprego terá um salário máximo, pelo que terá este aspecto:

```js
let job = {
  maxSalary: 140000
}
```

Para uma correspondência válida, o salário mínimo do candidato deve ser menor
ou igual ao salário máximo do cargo. Entretanto, vamos também incluir 10% de
espaço de manobra (deduzido do salário mínimo do candidato) caso o candidato
seja um astro do rock que gosta de programar no LABORATORIA em seu tempo livre.
A empresa que oferece o trabalho pode ser capaz de resolver alguma coisa.

> __Importante__ ❗
>
>Se ou o salário mínimo do candidato ou o salário máximo do cargo não estiver
>presente, lance um erro.

__Exemplo__

```js
Entradas: {minSalary:190000} {maxSalary:171000}
resultados: true
explicação: "O candidato fixa um salário mínimo de 190.000 menos 19.000 correspondente à margem de 10% deixa 171.000 e este é igual ao salário máximo de 171.000, pelo que regressamos à realidade."
```
