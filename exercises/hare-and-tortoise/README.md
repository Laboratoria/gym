# The Race Between Hare and Tortoise :checkered_flag: :rabbit: :turtle

[https://www.codewars.com/kata/57c398c0210f3e6f150001fc/train/javascript](https://www.codewars.com/kata/57c398c0210f3e6f150001fc/train/javascript)

__Historia__

Hay dos animales, una liebre y una tortuga. Quieren correr una carrera. La
velocidad de la liebre es de 100 metros por minuto. La velocidad de la tortuga
es de 10 metros por minuto.

Quieren correr para ver quién corrió primero a la cima de la montaña, la distancia
es de 1000 metros. La liebre corre muy rápido. Cuando corrió a 500 metros, la
tortuga estaba muy atrás. La liebre decidió dormir. Zzz ...

Cuando abrió los ojos, se sorprendió al descubrir que la tortuga estaba cerca de
la meta. Solo los últimos 40 metros. La liebre se apresuró a atrapar a la tortuga.

Pregunta: ¿Quién es el ganador? ¿La tortuga o la liebre? ¿Cuántos minutos
duerme la liebre?

__Tarea__

Completa la función `race()` que acepta 5 argumentos:

- `speed1` - La velocidad de la liebre :rabbit:

- `speed2` - La velocidad de la tortuga :turtle:

- `distance` - Distancia de carrera

- `sleep` - La distancia desde el punto de partida hasta la ubicación de la liebre
cuando decide dormir

- `getup` - Cuando la liebre se despertó, la distancia entre la tortuga y el punto
final

El resultado debería ser un string, como estos:

```js
"The hare won the race. He is sleeping for XX minutes."
o
"The tortoise won the race. The hare is sleeping for XX minutes."
o
"The hare and the tortoise tied. The hare is sleeping for XX minutes."
```

__XX__ es un número de minutos (redondeado a entero).

__Ejemplos__

```js
race(100,10,1000,500,40)
"The tortoise won the race. The hare is sleeping for 91 minutes."

race(100,10,1500,500,100)
"The hare and the tortoise tied. The hare is sleeping for 135 minutes."

race(100,10,1200,500,100)
"The hare won the race. He is sleeping for 105 minutes."
```

## Objetivos de aprendizaje (OAs)

- Uso de condicionales (if-else | switch | operador ternario)
- Manipulación de strings
