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

Você receberá um `string` de comprimento n. Cada caractere na corda
representa uma caixa. Se no caracter `i` houver um `0` então a caixa
 está vazia. Sehá um `1` então a caixa contém uma bola.

Por exemplo, o "cordão" "110", é de comprimento 3 e representa 3 caixas.
No primeiro e segundo caracteres (posições 0 e 1) é um "1", ou seja, a
primeira e segunda caixas têm uma bola cada uma. A segunda caixa tem uma bola
cada. O terceiro caractere (posição 2) tem um "0", ou seja, a terceira caixa
tem uma bola cada.

É então necessário calcular para cada caixa o número mínimo de
movimentos necessário para mover todas as bolas para dentro de
cada caixa. Em um movimento, apenas uma bola pode ser movida
entre caixas adjacentes. A caixa i é adjacente à caixa j
se abs(i - j) == 1. Note que após fazer isso, pode haver
mais de uma bola em algumas caixas.

Retornar uma resposta de matriz de tamanho n, onde a resposta[i] é
o número mínimo de operações necessárias para mover todas as bolas.
de operações necessárias para mover todas as bolas para a cela iital.

Por exemplo, para o "cordão" "110", a resposta é o "barulho" [1,1,3].

1) Primeira caixa: você terá que mover uma bola da segunda caixa para a
primeira caixa em uma caixa em uma única operação.

2) Segunda caixa: você terá que mover uma bola da primeira caixa para a
segunda em uma única operação.

3) Terceira caixa: você terá que mover uma bola da primeira caixa para a
terceira caixa em duas operações, e mover uma bola da segunda caixa para
a terceira caixa em uma operação.

Dica 1:

Se você quiser mover uma bola da caixa i para a caixa j, você precisará
abs(i-j) move-se.

Dica 2:

Para mover todas as bolas para alguma caixa, você pode movê-las uma
de cada vez.

Dica 3:

Para cada caixa i, iterar sobre cada bola em uma caixa j, e adicionar abs(i-j)
para a posição i da resposta de "array".
