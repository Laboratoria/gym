---
difficulty:
  - Intermediate
OAs:
  - Uso de condicionales (if-else | switch | operador ternario)
  - Manipulación de strings
---

# The Race Between Hare and Tortoise :checkered_flag: :rabbit: :turtle

[https://www.codewars.com/kata/57c398c0210f3e6f150001fc/train/javascript](https://www.codewars.com/kata/57c398c0210f3e6f150001fc/train/javascript)

__História__

Há dois animais, uma lebre e uma tartaruga. Querem fazer uma corrida.
A velocidade da lebre é de 100 metros por minuto. A velocidade da tartaruga é de
10 metros por minuto.

Querem correr para ver quem correu primeiro para o topo da montanha, a distância
é de 1000 metros. A lebre corre muito depressa. Quando correu até aos 500
metros, a tartaruga estava muito atrás. A lebre decidiu dormir. Zzz...

Quando abriu os olhos, ficou surpreendido ao descobrir que a tartaruga estava
perto do fim. Apenas os últimos 40 metros. A lebre apressou-se a apanhar a tartaruga.

Pergunta: Quem é o vencedor? A tartaruga ou a lebre? Quantos minutos dorme a
lebre?

__Tarefa__

Raça de função `race()` que aceita 5 argumentos:

- `speed1` -  A velocidade da lebre :rabbit:

- `speed2` - A velocidade da tartaruga :turtle:

- `distance` - Distância da corrida

- `sleep` - A distância entre o ponto de partida e a localização da lebre para
dormir.

- `getup` - Quando a lebre acordou, a distância entre a tartaruga e o ponto
final.

O resultado deve ser um fio como estes:

```js
"The hare won the race. He is sleeping for XX minutes."
o
"The tortoise won the race. The hare is sleeping for XX minutes."
o
"The hare and the tortoise tied. The hare is sleeping for XX minutes."
```

__XX__ é um número de minutos (arredondado ao número inteiro).

__Exemplos:__

```js
race(100,10,1000,500,40)
"The tortoise won the race. The hare is sleeping for 91 minutes."

race(100,10,1500,500,100)
"The hare and the tortoise tied. The hare is sleeping for 135 minutes."

race(100,10,1200,500,100)
"The hare won the race. He is sleeping for 105 minutes."
```
