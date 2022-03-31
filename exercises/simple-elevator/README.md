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

Hay una casa con 4 pisos. En esa casa hay un ascensor. Puedes programar
el ascensor para subir o bajar, dependiendo del botón que presiones dentro
del ascensor.

Los niveles válidos deben ser solamente estos números: `0, 1, 2, 3`

Los botones válidos deben ser solamente estos _strings_: `'0','1','2','3'`

Los valores posibles de retorno son estos números: `-3,-2,-1,0,1,2,3`

Si el ascensor está en el primer piso (nivel 0), y el usuario oprime el botón
`'2'` el ascensor tendrá que subir dos pisos, de modo que nuestra función
deberá retornar `2`.

Si el ascensor está en el 3er nivel y el usuario oprime el botón `'0'`,
el ascensor deberá bajar 3 niveles, de modo que nuestra función deberá
retornar `-3`).

Si el ascensor está en el 2do nivel, y el usuario oprime el botón `'2'`,
el ascensor no se moverá, y retornaremos `0`.

No podemos arriesgar las vidas de nuestros pasajeros, de modo que si obtenemos
entradas erróneas, nuestro ascensor deberá permanecer en el mismo nivel.
Entonces por ejemplo:

- `goto(2, '4')` debe retornar `0`, porque no hay botón `'4'` en el ascensor
- `goto(4, '0')` debe retornar `0`, porque no hay nivel 4
- `goto(3, undefined)` debe retornar `0`
- `goto(undefined, '2')` debe retornar `0`
- `goto([], '2')` debe retornar 0 porque el tipo del nivel es un arreglo en
  vez de un número
- `goto(3, {})` debe retornar 0 porque el tipo del botón es un objeto en vez
  de un _string_
