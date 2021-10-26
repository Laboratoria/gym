# Mutual Recursion

[https://www.codewars.com/kata/53a1eac7e0afd3ad3300008b/train/javascript](https://www.codewars.com/kata/53a1eac7e0afd3ad3300008b/train/javascript)

La recursividad mutua nos permite divertirnos con la recursividad regular
(donde una función se llama a sí misma hasta una condición de terminación)
y aplicarla a múltiples funciones que se llaman entre sí!

Usemos las secuencias de Hofstadter para demostrar esta técnica.
Crearas dos funciones `F` y `M` de modo que las siguientes ecuaciones sean verdaderas:

```sh
F(0) = 1
M(0) = 0
F(n) = n - M(F(n - 1))
M(n) = n - F(M(n - 1))
```

> __Importante__ ❗
> No se preocupe por los números negativos, `n` siempre será mayor o igual a cero.

Referencia de Hofstadter [http://en.wikipedia.org/wiki/Hofstadter_sequence#Hofstadter_Female_and_Male_sequences](http://en.wikipedia.org/wiki/Hofstadter_sequence#Hofstadter_Female_and_Male_sequences)

## Objetivos de aprendizaje (OAs)

- Recursividad
