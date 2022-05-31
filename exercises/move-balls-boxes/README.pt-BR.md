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

Você receberá string chamada `boxes` de comprimento `n`, onde cada posição
`boxes[i]` é considerada uma caixa, que terá valor `'0'` se estiver **vazia** e
`'1'` se contiver **uma** bola.

Em uma operação, você pode mover **uma** bola de uma caixa para uma caixa
adjacente. A caixa `i` é adjacente à caixa `j` se `abs(i - j) == 1`. Observe
que após executar a operação, pode haver mais de uma bola dentro das caixas.

Retorne array `answer` de tamanho `n`, onde `answer[i]` é o número **mínimo** de
operações necessárias para mover todas as bolas para a caixa na posição `i`.

Cada `answer[i]` é calculada considerando o estado inicial das caixas.

**Exemplo 1:**

```text
Entrada: boxes = "110"
Saída: [1,1,3]
Explicação: A resposta para cada caixa é a seguinte:

1. Primeira caixa: você terá que mover uma bola da segunda caixa para a primeira
em uma operação.
2. Segunda caixa: você terá que mover uma bola da primeira caixa para a segunda
caixa em uma operação.
3. Terceira caixa: você terá que mover uma bola da primeira caixa para a
terceira caixa em duas operações e mover uma bola da segunda caixa para a
terceira caixa em uma operação.
```

**Exemplo 2:**

```text
Entrada: caixas = "001011"
Saída: [11,8,5,4,3,4]
```

**Restrições:**

- `n == boxes.length`
- `1 <= n <= 2000`
- `boxes[i]` é `'0'` ou `'1'`.
