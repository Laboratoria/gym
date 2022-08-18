---
difficulty:
  - advanced
OAs:
  - arrays
  - recursion
projects:
  - markdown links
---

# Number of Islands

[https://leetcode.com/problems/number-of-islands/](https://leetcode.com/problems/number-of-islands/)

Dada una cuadrícula binaria m x n que representa un mapa
de "1" (tierra) y "0" (agua), devuelva el número de islas.

Una isla está rodeada de agua y se forma conectando tierras
adyacentes horizontal o verticalmente. Puede suponer que los
cuatro bordes de la cuadrícula están rodeados de agua.

__Restricciones:__

* m == grid.length
* n == grid[i].length
* 1 <= m, n <= 300
* grid[i][j] is '0' or '1'.

__Ejemplos:__

```js
  Input: grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]
  Output: 1
```

```js
  Input: grid = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ]
  Output: 3
```
