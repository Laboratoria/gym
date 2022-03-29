---
difficulty:
  - newbie
OAs:
  - conditionals
projects:
  - cipher
  - card-validation
---

# alarmClock

[https://the-winter.github.io/codingjs/exercise.html?name=alarmClock&title=Logic-1](https://the-winter.github.io/codingjs/exercise.html?name=alarmClock&title=Logic-1)

Dado um dia da semana codificado como 0=Domingo, 1=Segunda, 2=Terça,
...6=Sábado, e um booleano indicando se estamos de férias,
devolva um fio do formulário "7:00" indicando quando o despertador
deve tocar. Nos dias da semana, o alarme deve ser "7:00" e no
fim de semana deve ser "10:00". A menos que estejamos de
férias - então nos dias de semana deve ser "10:00" e nos
fins de semana deve ser "desligado".

__Exemplo__

```js
    alarmClock(1, false) → "7:00"
    alarmClock(5, false) → "7:00"
    alarmClock(0, false) → "10:00"
```
