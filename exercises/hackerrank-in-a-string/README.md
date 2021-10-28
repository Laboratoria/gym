# HackerRank in a string

[https://www.hackerrank.com/challenges/hackerrank-in-a-string/problem](https://www.hackerrank.com/challenges/hackerrank-in-a-string/problem)

Decimos que una cadena contiene la palabra __hackerrank__ si una subsecuencia
de sus caracteres deletrea la palabra __hackerrank__. Recuerde que una
subsecuencia mantiene el orden de los caracteres seleccionados de una secuencia.

Más formalmente, digamos `p[0], p[1], ..., p[9]` son los índices
respectivos de __h, a, c, k, e, r, r, a, n, k__ en string `s`.
Si `p[0] < p[1] < p[2] < ... < p[9]` es verdadero, entonces `s` contiene __hackerrank__.

Retorna `YES` si la cadena contiene `hackerrank`; de lo contrario, retorna `NO`.

__Ejemplo 1__

```sh
Entrada: s = hhaacckkekraraannk
Salida: YES
Explicación: Contiene una subsecuencia de todos los caracteres en el orden correcto.
```

__Ejemplo 2__

```sh
Entrada: s = haacckkerannkk
Salida: NO
Explicación: Faltando la segunda "r"
```

__Ejemplo 3__

```sh
Entrada: s = hccaakkerannkk
Salida: NO
Explicación: No hay ninguna "c" luego de la primera ocurrencia de una "a"
```

## Objetivos de aprendizaje (OAs)

- Manipulación de strings
- Uso de expresiones regulares
