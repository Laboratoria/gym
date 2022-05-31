---
difficulty:
  - intermediate
OAs:
  - conditionals
  - arrays
projects:
  - cipher
  - card-validation
  - data-lovers
---

# Simple Elevator

[https://www.codewars.com/kata/52ed326b8df6540e06000029/train/javascript](https://www.codewars.com/kata/52ed326b8df6540e06000029/train/javascript)

Há uma casa com 4 andares. Nessa casa há um elevador. Você pode programar este
elevador para subir ou descer, dependendo de qual botão o usuário apertar dentro
do elevador.

Os andares válidos devem ser apenas estes números: `0,1,2,3`

Os botões válidos devem ser apenas estas strings: `'0','1','2','3'`

Os valores de retorno possíveis são estes números: `-3,-2,-1,0,1,2,3`

Se o elevador estiver no térreo (andar 0) e o usuário apertar o botão `'2'` o
elevador deve subir 2 andares, então nossa função deve retornar `2`.

Se o elevador estiver no 3º andar e o usuário apertar o botão `'0'` o elevador
deve descer 3 andares, então nossa função deve retornar `-3`.

Se o elevador estiver no 2º andar e o usuário apertar o botão `'2'` o elevador
deve permanecer no mesmo andar, então retornamos `0`.

Não podemos colocar em risco a vida de nossos passageiros, portanto, se
obtivermos entradas errôneas, nosso elevador deve permanecer no mesmo andar.
Assim, por exemplo:

- `goto(2,'4')` deve retornar `0`, pois não há botão `'4'` no elevador.
- `goto(4,'0')` deve retornar `0`, pois não existe andar 4.
- `goto(3,undefined)` deve retornar `0`.
- `goto(undefined,'2')` deve retornar `0`.
- `goto([],'2')` deve retornar `0` porque o tipo do nível de entrada é array
  em vez de um número.
- `goto(3,{})` deve retornar `0` porque o tipo do botão de entrada é objeto em
  vez de uma string.
