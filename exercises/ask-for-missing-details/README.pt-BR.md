---
difficulty:
  - intermediate
OAs:
  - Métodos de arrays
  - Manipulação de objetos
projects:
  - data-lovers
  - memory-match
---

# Ask for missing details

[https://www.codewars.com/kata/583d972b8bbc0402cf000121/train/javascript](https://www.codewars.com/kata/583d972b8bbc0402cf000121/train/javascript)

Você receberá uma array de objetos que representam dados sobre os
desenvolvedores que se inscreveram para participar da próxima reunião.

Dada a seguinte array de entrada:

```js
let list1 = [
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
];
```

Escreva uma função que:

1. Adicione a propriedade `question` a cada objeto na array de entrada onde o
  desenvolvedor não forneceu os detalhes relevantes (essas propriedades
  onde o valor é `null` ). O valor da propriedade `question` deve ser a
  seguinte string:

    Hi, could you please provide your `<property name>`.

2. 2. A função deve retornar apenas os desenvolvedores com detalhes ausentes:

```js
[
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
  question: 'Hi, could you please provide your firstName.' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null,
  question: 'Hi, could you please provide your language.' }
]
```
