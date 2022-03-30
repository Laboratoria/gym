---
difficulty:
  - newbie
---

# Closest Elevator

[https://www.codewars.com/kata/5c374b346a5d0f77af500a5a/train/javascript](https://www.codewars.com/kata/5c374b346a5d0f77af500a5a/train/javascript)

Dados 2 ascensores (llamados "left" y "right") en un edificio de 3 pisos (numerados del `0` al `2`),
escriba una función `elevator` que acepte tres argumentos (en orden):

* `left` - el piso actual del ascensor `left`
* `right` - el piso actual del ascensor `right`
* `call` - el piso desde el cual se llamó al ascensor

La función deberá retornar cual es el ascensor más cercano al piso
del cual se llamó al ascensor (`"left"` / `"right"`).

En el caso donde ambos ascensores sean equidistantes del piso,
se deberá elegir el ascensor `right`.

Puedes asumir que los argumentos siempre serán números enteros entre 0 y 2.

Ejemplos:

```js
elevator(0, 1, 0); // => "left"
elevator(0, 1, 1); // => "right"
elevator(0, 1, 2); // => "right"
elevator(0, 0, 0); // => "right"
elevator(0, 2, 1); // => "right"
```
