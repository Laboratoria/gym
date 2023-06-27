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

Dada uma grelha binária m x n 2D que representa um mapa
de '1's (terra) e '0's (água), devolva o número de ilhas.

Uma ilha é cercada por água e é formada pela conexão horizontal
ou vertical de terras adjacentes. Pode-se supor que todas as
quatro bordas da grade estão rodeadas por água.

__Restrições:__

* m == grid.length
* n == grid[i].length
* 1 <= m, n <= 300
* grid[i][j] is '0' or '1'.

__Exemplos:__

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
