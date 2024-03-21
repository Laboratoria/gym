# Session 4 Docs Kahoot

## Link

[https://create.kahoot.it/share/gym-session-04/3660e665-90b2-4bc0-9ed7-60ac23df7293](https://create.kahoot.it/share/gym-session-04/3660e665-90b2-4bc0-9ed7-60ac23df7293)

## Temario

- [Valor primitivo](#valor-primitivo)
- [Palabras reservadas](#palabras-reservadas)
- [Push Array](#push-array)
- [Scope](#scope)
- [ForEach Vs Map](#foreach-vs-map)
- [Null vs Undefined](#null-vs-undefined)
- [let](#let)
- [Expresiones regulares](#expresiones-regulares)
- [Splice](#splice)

----

### Valor primitivo

En JavaScript, un dato primitivo es un tipo de dato básico que se utiliza para representar información.

Hay 6 tipos de datos primitivos: string, number, bigint, boolean, undefined y symbol

[Documentación](https://developer.mozilla.org/es/docs/Glossary/Primitive)

----

### Palabras reservadas

Son términos que tienen un significado especial y están reservados por el lenguaje para realizar ciertas acciones o funciones específicas. Estas palabras tienen un propósito predefinido y no se pueden utilizar como identificadores, como nombres de variables o funciones.


[Documentación](https://www.w3schools.com/js/js_reserved.asp)

----

### Push Array

El método Array.prototype.push() en JavaScript se utiliza para agregar uno o más elementos al final de un array y devuelve la nueva longitud del array. 

[Documentación](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

----

### Scope

Se refiere al alcance o visibilidad de las variables dentro del código. Hay varios tipos de scope que debes conoce

Scope Global: Las variables declaradas fuera de cualquier función tienen alcance global. Esto significa que son accesibles desde cualquier parte del programa

Scope Local (Función): Las variables declaradas dentro de una función solo son accesibles dentro de esa función. No pueden ser utilizadas fuera de ella.

Scope de Bloque (ES6): Las variables declaradas con let y const tienen alcance de bloque. Esto significa que solo son accesibles dentro del bloque de código donde se definen.

[Documentación](https://www.w3schools.com/js/js_scope.asp)


----

### ForEach Vs Map

La diferencia entre .forEach() y .map() en JavaScript radica en su propósito y comportamiento:

.forEach():
Propósito: Itera sobre una lista y aplica una operación con efectos secundarios a cada elemento de la lista (por ejemplo, guardar cada elemento en una base de datos).
Retorno: No devuelve nada.
Efecto: No modifica el array original.


[Documentación](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)


.map():
Propósito: Itera sobre una lista, transforma cada elemento y devuelve una nueva lista con los elementos transformados (por ejemplo, convertir una lista de cadenas a mayúsculas).
Retorno: Devuelve un nuevo array.
Efecto: No modifica el array original.

[Documentación](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

En resumen:

Si deseas obtener una forma modificada del array original, utiliza .map().
Si no necesitas eso, utiliza .forEach()

----

### Null vs Undefined

El valor null es un literal de Javascript que representa intencionalmente un valor nulo o "vacío".
[Documentación](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/null)


Tipo de dato undefined
En JavaScript, un primitive (valor primitivo, tipo de dato primitivo) son datos que no son un objeto y no tienen métodos.
[Documentación](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/undefined)

----

### Let

La instrucción let declara una variable de alcance local con ámbito de bloque(blockscope), la cual, opcionalmente, puede ser inicializada con algún valor.

[Documentación](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/let)

----

### Expresiones regulares

Son patrones que se utilizan para hacer coincidir combinaciones de caracteres en cadenas.
Las expresiones regulares son patrones que describen secuencias específicas de caracteres.
En JavaScript, las expresiones regulares también son objetos.
Se utilizan para buscar, extraer o reemplazar texto en cadenas.

Escribir un patrón de expresión regular:
Un patrón de expresión regular puede contener:
Caracteres simples, como /abc/.
Caracteres especiales, como /ab*c/ (donde * significa “0 o más apariciones del elemento anterior”).
Paréntesis para agrupar y recordar partes del patrón.

Ejemplo:
El patrón /abc/ coincide con la secuencia exacta “abc”.
El patrón /ab*c/ coincide con “ac”, “abc”, “abbc”, etc.

[Documentación](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions)

Herramienta para expresiones regulares:
RegExr: Learn, Build, & Test RegEx

[Herramienta](https://regexr.com/)

----

### Splice

Se utiliza para agregar o eliminar elementos de un array existente.
El valor de retorno será los elementos eliminados del array. Si no se elimina nada, el retorno será simplemente un array vacío.

array.splice(start, cantidad_a_eliminar, elementos_a_agregar);

start: Índice basado en cero desde el cual comenzar a cambiar el array. Si se omite (y se llama a .splice() sin argumentos), no se elimina nada. Esto es diferente de pasar undefined, que se convierte en 0.

cantidad_a_eliminar: Un número entero que indica la cantidad de elementos a eliminar desde start. Si se omite o su valor es mayor o igual al número de elementos después de la posición especificada por start, se eliminarán todos los elementos desde start hasta el final del array.

elementos_a_agregar: Los elementos que se agregarán al array

[Documentación](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)