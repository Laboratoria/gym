# Roman to Integer

[https://leetcode.com/problems/roman-to-integer/](https://leetcode.com/problems/roman-to-integer/)

Los números romanos son representados por 7 símbolos diferentes: `I`, `V`, `X`,
`L`, `C`, `D` y `M`

| __Symbol__   |    __Value__ |
| -- | -- |
|I  |                1|
|V  |                5|
|X  |               10|
|L  |               50|
|C  |               100|
|D  |               500|
|M  |               1000|

Por ejemplo, 2 es escrito como `II` en números romanos, solo dos unos son añadidos.
`12` es escrito como `XII`, el cual es simple `X` + `II`. El numero 27 es escrito
como `XXVII`, el cual es `XX` + `V` + `II`.

Los números romanos son usualmente escritos del mas alto al mas bajo de izquierda
a derecha. Sin embargo, para el numero cuatro no es `IIII`. En su lugar, el numero
cuatro es escrito como `IV`. Porque el uno esta antes de el cinco lo substraemos
para que sea cuatro. El mismo principio aplica para el numero nueve, el cual es escrito
como `IX`. Hay seis instancia donde la sustracción es usada:

- `I` puede ser colocado antes de `V` (5) y `X` (10) para hacerlo 4 y 9.
- `X` puede ser colocado antes de `L` (50) y `C` (100) para hacerlo 40 y 90.
- `C` puede ser colocado antes de `D` (500) y `M` (1000) para hacerlo 400 y 900.

Dado un numero romano, conviértelo a un numero entero.

__Ejemplo 1__

```js
Entrada: s = "III"
Salida: 3
```

__Ejemplo 2__

```js
Entrada: s = "IV"
Salida: 4
```

__Ejemplo 3__

```js
Entrada: s = "IX"
Salida: 9
```

__Ejemplo 4__

```js
Entrada: s = "LVIII"
Salida: 58
Explicación: L = 50, V= 5, III = 3.
```

__Ejemplo 4__

```js
Entrada: s = "MCMXCIV"
Salida: 1994
Explicación: M = 1000, CM = 900, XC = 90 and IV = 4.
```

> __Importante__ ❗
>
> - `1 <= s.length <= 15`
> - `s` contiene solo los caracteres `('I', 'V', 'X', 'L', 'C', 'D', 'M')`.
> - Esta __garantizado__ que `s` es un numero romano valido en el rango `[1, 3999]`.

## Objetivos de aprendizaje (OAs)

- Objetos (key, value)
