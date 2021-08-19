# Find Words

[https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/](https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/)

Dado un arreglo de palabras `words` y un string `chars`.

Un string es __bueno__ si puede ser formado por letras dentro de `chars` (cada letra pude ser usada una única vez)

Retorna _la suma de las longitudes de todos los strings buenos dentro de `words`_.


__Ejemplo 1__

```
Entrada: words = ["cat","bt","hat","tree"], chars = "atach"
Salida: 6
Explicación: Los strings que pueden ser formados son "cat" y "hat" por lo tanto la respuesta es 3 + 3 = 6.
```

__Ejemplo 2__

```
Entrada: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
Salida: 10
Explicación: Los strings que pueden ser formados son "hello" y "world" por lo tanto la respuesta es 5 + 5 = 10.
```

## Objetivos de aprendizaje (OAs)

- Manipulación de strings
- Métodos de arreglo
