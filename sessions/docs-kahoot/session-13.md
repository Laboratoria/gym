# Session 13 Docs Kahoot

## Link

[https://create.kahoot.it/share/gym-sesion-13/44fed93f-c894-4391-a8cc-da84743f47c8](https://create.kahoot.it/share/gym-sesion-13/44fed93f-c894-4391-a8cc-da84743f47c8)

## Temario

- [Estructuras de control](#estructuras-de-control)
- [Parametros funciones](#parametros-funciones)
- [Do While loop](#do-while-loop)
- [Expresiones y Operadores](#expresiones-y-operadores)
- [Asignación](#asignación)
- [While loop](#while-loop)
- [Switch case](#switch-case)
- [Callback](#callback)
- [Hoisting](#hoisting)

----

### Estructuras de control

Los control flow (flujo de control) en JavaScript son una parte fundamental del
lenguaje que permite controlar el flujo de ejecución del código.

- Bloque de declaraciones: Se utiliza para agrupar declaraciones y se delimita
  con un par de llaves `{}`. Por ejemplo:

```js
{
  declaración1;
  declaración2;
  // …
  declaraciónN;
}
```

- Declaraciones condicionales: Son un conjunto de comandos que se ejecutan si
  se cumple una condición específica.
  JavaScript admite dos declaraciones condicionales: if...else y switch.
  Por ejemplo, la declaración if...else se ve así:

```js
if (condición) {
    declaración1;
} else {
    declaración2;
}
```

- Bucles (Loops): Los bucles permiten repetir bloques de código hasta que se
  cumpla una condición específica.
  Los bucles en JavaScript incluyen `for`, `while`, y `do...while`.

[Documentación](https://developer.mozilla.org/en-US/docs/Glossary/Control_flow)

----

### Parametros funciones

Los parámetros de una función en JavaScript son las variables que se pasan a la
función cuando se llama.

- Definición de la función: Los parámetros se definen en la declaración de la
   función, dentro de los paréntesis
   y separados por comas. Por ejemplo:

```js
function miFuncion(parametro1, parametro2) {
// Código de la función
}
```

- Llamada a la función: Cuando llamas a la función, pasas valores concretos
   para estos parámetros. Por ejemplo:

```js
miFuncion(valor1, valor2);
```

- Parámetros por valor: Los argumentos se pasan por valor, lo que significa
   que si la función cambia el valor de un argumento, este cambio no se refleja
   globalmente ni en la llamada de la función.

- Parámetros predeterminados: Puedes asignar un valor predeterminado a un
   parámetro en caso de que no se le pase ningún valor.

[Documentación](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions)

----

### Do While loop

El bucle do...while en JavaScript es una estructura de control que permite
ejecutar un bloque de código al menos una vez y luego repetir la ejecución
mientras se cumpla una condición.

```js
do
  sentencia
while (condición);
```

[Documentación](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/do...while)

----

### Expresiones y Operadores

Las expresiones y operadores en JavaScript son fundamentales para escribir
cualquier tipo de código en este lenguaje.

- Operadores de asignación:
   Asignan un valor a su operando izquierdo basándose en el valor de su
   operando derecho.
   Por ejemplo, x = y asigna el valor de y a x.
   También existen operadores de asignación compuestos como x += y que es una
   abreviatura para x = x + y.

```js
let x = 10; // Operador de asignación
x += 5; // Operador de asignación compuesto (suma)
console.log(x); // Imprime 15
```

- Operadores de comparación:
   Comparan sus operandos y devuelven un valor booleano basado en si la
   comparación es verdadera o no.
   Por ejemplo, == para igualdad, != para desigualdad, < para menor que, > para
   mayor que.

```js
console.log(10 == '10'); // Imprime true
console.log(10 != '5'); // Imprime true
console.log(10 < '15'); // Imprime true
console.log(10 > '15'); // Imprime false
```

- Operadores aritméticos:
   Realizan operaciones matemáticas con números. Por ejemplo, + para suma
   , - para resta, * para multiplicación, / para división, y % para obtener
   el residuo de una división.

```js
let a = 10 + 5; // Suma
let b = 10 - 5; // Resta
let c = 10 * 5; // Multiplicación
let d = 10 / 5; // División
let e = 10 % 7; // Residuo
console.log(a, b, c, d, e); // Imprime 15, 5, 50, 2, 3
```

- Operadores bit a bit:
   Realizan operaciones a nivel de los bits de sus operandos.

```js
let bitwiseAnd = 5 & 1;
let bitwiseOr = 5 | 1;
let bitwiseXor = 5 ^ 1;
```

- Operadores lógicos:
   Se utilizan para determinar la lógica entre variables o valores.
   Por ejemplo, `&&` para `AND` lógico, `||` para `OR` lógico.

```js
let test1 = true;
let test2 = false;
console.log(test1 && test2); // Imprime false
console.log(test1 || test2); // Imprime true
```

- Operadores de cadena:
   Se utilizan para manipular cadenas de texto.

```js
let saludo = "Hola " + "Mundo"; // saludo es "Hola Mundo"
```

- Operador condicional (ternario)

```js
let valor = (10 > 9) ? "Sí" : "No"; // valor es "Sí" porque 10 es mayor que 9
```

- Operador coma

```js
for(let i=0, j=10; i <= j; i++, j--) {
  console.log(i);
}
```

- Operadores unarios

```js
console.log(typeof true) // "boolean"
```

- Operadores relacionales

```js
let arr = [1,2,3];
console.log(4 in arr); // imprime false porque '4' no es un índice en el array arr.
```

[Documentación](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_operators#comparacion)

----

### Asignación

La asignación en JavaScript es un concepto fundamental que se utiliza para
asignar un valor a una variable utilizando el operador de asignación =.

```js
// Asumimos las siguientes variables
//  x = 5
//  n = 10
//  z = 25

x = n; // La variable x contiene el valor 10
x = n = z; // x = n (es decir 10) y z pisa el valor total remplazandolo por 25
```

[Documentación](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Assignment)

----

### While loop

En JavaScript, el bucle while se utiliza para repetir un bloque de código
mientras una condición específica sea verdadera

```js
n = 0;
x = 0;
while (n < 3) {
  n++;
  x += n;
}
```

[Documentación](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/while)

----

### Switch case

En JavaScript, la declaración switch se utiliza para realizar diferentes
acciones basadas en diferentes condiciones

```js
switch (expr) {
  case "Naranjas":
    console.log("El kilogramo de naranjas cuesta $0.59.");
    break;
  case "Manzanas":
    console.log("El kilogramo de manzanas cuesta $0.32.");
    break;
  case "Platanos":
    console.log("El kilogramo de platanos cuesta $0.48.");
    break;
  case "Cerezas":
    console.log("El kilogramo de cerezas cuesta $3.00.");
    break;
  case "Mangos":
  case "Papayas":
    console.log("El kilogramo de mangos y papayas cuesta $2.79.");
    break;
  default:
    console.log("Lo lamentamos, por el momento no disponemos de " + expr + ".");
}

console.log("¿Hay algo más que te quisiera consultar?");
```

[Documentación](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/switch)

----

### Callback

Una función de callback es una función que se pasa a otra función como un
argumento, que luego se invoca dentro de la función externa para completar
algún tipo de rutina o acción.

```js
function saludar(nombre) {
  alert("Hola " + nombre);
}

function procesarEntradaUsuario(callback) {
  var nombre = prompt("Por favor ingresa tu nombre.");
  callback(nombre);
}

procesarEntradaUsuario(saludar);
```

[Documentación](https://developer.mozilla.org/es/docs/Glossary/Callback_function)

----

### Hoisting

El "hoisting" es un comportamiento predeterminado de JavaScript que mueve todas
las declaraciones al principio del ámbito actual (al principio del script
actual o de la función actual)

```js
var x = 1; // Inicializa x
console.log(x + " " + y); // '1 undefined'
var y = 2; // Inicializa y
```

[Documentación](https://developer.mozilla.org/es/docs/Glossary/Hoisting)
