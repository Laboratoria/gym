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

Dado un día de la semana codificado como 0=domingo, 1=lunes, 2=martes,
...6=sábado, y un booleano que indica si estamos de vacaciones,
devuelve una cadena de la forma "7:00" que indica cuándo debe
sonar el despertador. Entre semana, la alarma debe ser "7:00"
y el fin de semana debe ser "10:00". A menos que estemos de
vacaciones, entonces los días laborables debería ser "10:00"
y los fines de semana debería ser "off".

__Ejemplo__

```js
    alarmClock(1, false) → "7:00"
    alarmClock(5, false) → "7:00"
    alarmClock(0, false) → "10:00"
```
