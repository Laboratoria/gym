# Session 14 Docs Kahoot

## Link

[https://create.kahoot.it/share/kahoot-14-el-terror-de-javascript/f429c2f2-abab-4928-8373-f716b9350b31](https://create.kahoot.it/share/kahoot-14-el-terror-de-javascript/f429c2f2-abab-4928-8373-f716b9350b31)

## Temario

- [Sincrónico](#sincronico)
- [Promesas](#promesas)
- [Loop While](#loop-while)
- [Do While](#do-while)
- [Try…catch](#try…catch)
- [await](#await)
- [throw](#throw)

----

### Sincrónico

Sincrónico se refiere a la comunicación en tiempo real donde cada lado recibe
(y si es necesario, procesa y responde) mensajes instantáneamente (o lo más
cerca posible a instantáneamente).

----

### Promesas

Una promesa en JavaScript es un objeto que representa la terminación o el
fracaso de una operación asíncrona. Esencialmente, una promesa es un objeto
devuelto al cual se adjuntan funciones callback, en lugar de pasar callbacks
a una función.

[Documentación](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

#### Promise.all()

El método Promise.all(iterable) devuelve una promesa que termina correctamente
cuando todas las promesas en el argumento iterable han sido concluídas con
éxito, o bien rechaza la petición con el motivo pasado por la primera promesa
que es rechazada.

[Documentación](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)

#### Promise.prototype.catch()

El método catch() retorna una Promise y solo se ejecuta en los casos en los
que la promesa se marca como Reject. Se comporta igual que al llamar
Promise.prototype.then(undefined, onRejected) (de hecho, al llamar
obj.catch(onRejected) internamente llama a obj.then(undefined, onRejected)).

[Documentación](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch#especificaciones)


#### Promise.race()

El método Promise.race(iterable) retorna una promesa que se cumplirá o no tan
pronto como una de las promesas del argumento iterable se cumpla o se rechace,
con el valor o razón de rechazo de ésta.

[Documentación](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise/race)

----

### Loop While

Crea un bucle que ejecuta una sentencia especificada mientras cierta condición
se evalúe como verdadera. Dicha condición es evaluada antes de ejecutar
la sentencia.

[Documentación](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/while)

----

### Do While

La sentencia (hacer mientras) crea un bucle que ejecuta una sentencia
especificada, hasta que la condición de comprobación se evalúa como falsa.
La condición se evalúa después de ejecutar la sentencia, dando como resultado
que la sentencia especificada se ejecute al menos una vez.

[Documentación](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/do...while)

----

### Try…catch

La declaración try...catch señala un bloque de instrucciones a intentar (try),
y especifica una respuesta si se produce una excepción (catch).

#### La cláusula finally

La cláusula finally contiene sentencias a ejecutarse después de que las
cláusulas try y catch se ejecuten, pero antes de las sentencias que le
siguen al bloque try..catch..finally. Note que la cláusula finally se ejecuta
sin importar si una excepción es o no lanzada. Si una excepción es lanzada,
las instrucciones en la cláusula finally se ejecutan incluso si ninguna
cláusula catch maneja la excepción.

[Documentación](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/try...catch#la_cl%C3%A1usula_finally)

[Documentación](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/try...catch)

----

### await

El operador await es usado para esperar a una Promise. Sólo puede ser usado
dentro de una función async function.

[Documentación](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/async_function)

----

### throw

Utilice la sentencia throw para lanzar una excepción. Cuando lanza una excepción,
expresion especifica el valor de la excepción.

[Documentación](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/throw)
