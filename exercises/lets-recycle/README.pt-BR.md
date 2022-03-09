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

Se você fornecer uma lista de objetos. Cada objeto tiene `type`, `material` y
possivelmente `secondMaterial`. Os materiais existentes são: papel, vidro,
orgânico, y plástico.

O trabalho é classificado como objetos nos 4 contenedores de reciclagem de
acuerdo com seu `material` (e `secondMaterial`, no caso de existir), listando o
valor `type` dos objetos que devem ser nos mesmos contenedores.

__Notas__

1. Los contenedores deben venir en el mismo orden que los materiales
enumerados anteriormente. (papel, vidro, orgânico, y plástico).
2. Todos os contenedores deben aparecem na salida, inclusive si algunos de
ellos están vacíos,
3. Se um objeto está dentro dos materiais, `type` deve aparecer em seus
respectivos contenedores.
4. A ordem dos 'tipos' em cada conteúdo deve ser o mismo que a ordem de seus
respectivos objetos na lista de entrada.

__Exemplo__

```js
entrada = [
  {"type": "rotten apples", "material": "organic"},
  {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
  {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
  {"type": "amazon box", "material": "paper"},
  {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
]
salida = [
  ["wine bottle", "amazon box", "beer bottle"],
  ["wine bottle", "beer bottle"],
  ["rotten apples", "out of date yogurt"],
  ["out of date yogurt"]
]
```
