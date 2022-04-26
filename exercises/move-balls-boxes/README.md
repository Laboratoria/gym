---
difficulty:
  - intermediate
OAs:
  - arrays
projects:
  - data-lovers
  - memory match
---

# Move All Balls to Each Box

[https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/](https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/)

Te entregarán un `string` de longitud n. Cada caracter del string representa
una caja. Si en el caracter `i` hay un "0" entonces la caja está vacia. Si
hay un "1" entonces la caja contiene una bola.

Por ejemplo, el `string` "110", tiene longitud 3 y representa 3 cajas. En el
primer y segundo caracter (posición 0 y 1) es un "1" es decir la primera y
segunda caja tiene una bola cada una. El tercer caracter (posicón 2) tiene
un "0" es decir la tercera caja está vacia.

Se requiere entonces calcular para cada caja el mínimo número de movimientos
necesarios para mover todas las bolas a cada caja. En un movimiento sólo se
pueden mover una bola entre cajas adyacentes. La casilla i es adyacente a la j
si abs(i - j) == 1. Ten en cuenta que después de hacer esto, puede haber más
de una bola en algunas casillas.

Devuelve un array respuesta de tamaño n, donde respuesta[i] es el número mínimo
de operaciones necesarias para mover todas las bolas a la iésima casilla.

Por ejemplo, para el `string` "110", la respuesta es el `array` [1,1,3].

1) Primera caja: tendrás que mover una bola de la segunda caja a la primera
caja en una sola operación.

2) Segunda caja: tendrás que mover una bola de la primera caja a la segunda
en una sola operación.

3) Tercera caja: tendrás que mover una bola de la primera caja a la tercera
caja en dos operaciones, y mover una bola de la segunda caja a la tercera caja
en una operación.

Pista 1:

Si quieres mover una bola de la caja i a la caja j, necesitarás
movimientos abs(i-j).

Pista 2:

Para mover todas las bolas a alguna caja, puedes moverlas una a una.

Pista 3:

Para cada casilla i, iterar sobre cada bola de una casilla j, y añadir abs(i-j)
a la posición i del `array` respuesta.
