---
difficulty:
  - intermediate
OAs:
  - arrays
  - objects
projects:
  - data-lovers
  - social-network
---

# Let's Recycle

[https://www.codewars.com/kata/5b6db1acb118141f6b000060/javascript](https://www.codewars.com/kata/5b6db1acb118141f6b000060/javascript)

Você receberá um array de objetos. Cada objeto possui `type`, `material` e
possivelmente `secondMaterial`. Os materiais existentes são: papel, vidro,
orgânico e plástico.

Seu trabalho é classificar esses objetos nas 4 lixeiras de acordo com seu
`material` (e `secondMaterial`, quando presente), listando o `type` dos objetos
que devem ir para essas lixeiras.

__Notas__

1. As lixeiras devem vir na mesma ordem dos materiais listados acima
(`paper`, `glass`, `organic` e `plastic`).
2. Todas as lixeiras devem ser listadas na saída, mesmo que algumas estejam
vazias,
3. Se um objeto for feito de dois materiais, seu `type` deve aparecer em ambas
respectivas lixeiras.
4. A ordem de `type` em cada lixeira deve ser a mesma que a ordem de seus
respectivos objetos na lista de entrada.

__Exemplo__

```js
entrada = [
  {"type": "rotten apples", "material": "organic"},
  {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
  {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
  {"type": "amazon  box", "material": "paper"},
  {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
]
saída = [
  ["wine bottle", "amazon box", "beer bottle"],
  ["wine bottle", "beer bottle"],
  ["rotten apples", "out of date yogurt"],
  ["out of date yogurt"]
]
```
