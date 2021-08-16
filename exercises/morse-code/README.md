
# Unique Morse Code Words

[https://leetcode.com/problems/unique-morse-code-words/](https://leetcode.com/problems/unique-morse-code-words/)

El código Morse Internacional define un estándar de codificación donde cada letra se traduce a una series de puntos y guiones, como sigue:

- `'a'` se traduce a `".-"`,
- `'b'` se traduce a `"-..."`,
- `'c'` se traduce a `"-.-."`, y sucesivamente.


Por conveniencia, la tabla entera para los 26 caracteres del alfabeto Ingles es dado como se muestra:

```js
[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
```

Dado un arreglo de palabras como strings donde cada palabra puede ser escrita como una concatenación del código Morse de cada letra.

- Por ejemplo, `"cab"` puede ser escrito como `"-.-..--..."`, el cual es la concatenación de `"-.-.", ".-"`, y `"-..."`. Nosotros llamaremos tal concatenación la transformación de una palabra.


Retorna el numero de diferentes __transformaciones__ entre todas las palabras del arreglo.

__Ejemplo 1__

```js
// entrada
["gin","zen","gig","msg"]

La transformación de cada palabra es

"gin" -> "--...-."
"zen" -> "--...-."
"gig" -> "--...--."
"msg" -> "--...--."

Hay 2 diferentes transformaciones "--...-." y "--...--.".

// salida
2
```

__Ejemplo 2__

```js
// entrada
words = ["a"]

// salida
1
```

> __Importante__ ❗
>
> Cada palabra `words[i]` esta compuesta de letras minúsculas del Ingles.

## Objetivos de aprendizaje (OAs)

- Manipulación de strings
- Métodos de arreglos
- Objetos
