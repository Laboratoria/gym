# Sesión 11 - 14/10/2021

## Ejercicios

| Ejercicio                                                        | Complejidad                    | Etiquetas                    | OAs                                                                               |
| ---------------------------------------------------------------- | ------------------------------ | ---------------------------- | --------------------------------------------------------------------------------- |
| [**Disemvowel Trolls**](../../exercises/disemvowel-trolls/README.md) | :suspect: **Warm-up** | `regex`, `strings` | <ul><li> Uso de expresiones regulares </li><li> Manipulación de strings </li></ul>  |
| [**Moving Zeros To The End**](../../exercises/move-zeros/README.md) | :rage1: **Challenge** | `arrays` | <ul><li>Métodos de arreglos</li></ul>  |
| [**Let's Recycle**](../../exercises/lets-recycle/README.md) | :godmode: **Hacker Edition** | `objects`, `arrays`| <ul><li>Objetos (key, value)</li><li>Métodos de arreglo</li></ul>  |

## Kahoot

🔗[https://create.kahoot.it/details/14ab8d02-c970-4905-8ced-1b16328470f2](https://create.kahoot.it/details/14ab8d02-c970-4905-8ced-1b16328470f2)

1. Qué imprime console.log?

    ```js
    const a = 12;
    const b = "12";

    console.log(a == b)
    console.log(a === b)
    ```

   - false, false ❌
   - true, false ✅
   - false, true ❌
   - true, true ❌

    __OAs:__ [Comparadores de igualdad e identidad](https://developer.mozilla.org/es/docs/Web/JavaScript/Equality_comparisons_and_sameness)

2. Qué imprime console.log?

    ```js
    const arr = [...new Set([3, 1, 2, 3, 4])];
    console.log(arr.length, arr[2]);
    ```

   - 5, 2 ❌
   - 4, 3 ❌
   - 4, 2 ✅
   - error ❌

    __OAs:__: Set

3. Cual de las siguientes afirmaciones acerca de las funciones NO es verdad?

   - Las funciones pueden contener una secuencia de sentencias. ❌
   - Las funciones pueden ser ejecutadas multiples veces. ❌
   - Las funciones son siempre ejecutadas primero. ✅
   - Las funciones son objetos. ❌

    __OAs:__ Funciones

4. Como comprobar si un valor es un tipo array?

   - typeof value === 'Array' ❌
   - value instanceof Array ✅
   - Array.isArray(value) ✅
   - typeof value === 'object' && value !== null ❌

    __OAs:__ Data types

5. Qué imprime console.log?

    ```js
    const a = false
    const b = a || true
    const c = b && 'dog'
    const d = (a && c) || 'cat'

    console.log(d)
    ```

   - true ❌
   - false ❌
   - "dog" ❌
   - "cat" ✅

    __OAs:__ [Evaluación de circuito corto](https://codeburst.io/javascript-what-is-short-circuit-evaluation-ff22b2f5608c)

6. Qué imprime console.log?

    ```js
    const myVar = "Foo";

    function function1(param = "Hi") {
      const myVar = "Baz";
      console.log(param, myVar);
    }

    function function2() {
      const myVar = "Bar";
      function1();
    }

    function2();
    ```

   - undefined, "Baz" ❌
   - "Hi", "Bar" ❌
   - "Hi", "Baz" ✅
   - "Hi", "Foo" ❌

    __OAs:__ Funciones, const, scope

7. Qué imprime console.log?

    ```js
    const arr1 = ['a', 'b', 'c'];
    const arr2 = ['b', 'c', 'a'];

    console.log(
      arr1.sort() === arr1,
      arr2.sort() == arr2,
      arr1.sort() === arr2.sort()
    );
    ```

   - false, false, true ❌
   - true, true, false ✅
   - true, true, true ❌
   - false, false, false ❌

    __OAs:__ [Diferencia entre values y references](https://dmitripavlutin.com/value-vs-reference-javascript/)

8. Qué imprime console.log?

    ```js
    function job() {
      return Promise.reject();
    }

    const promise = job();

    promise
      .then(function() {
        console.log('Success 1');
      })
      .catch(function() {
        console.log('Error 1');
      })
      .then(function(val) {
        console.log('Success 2');
      });
    ```

   - "Error 1" ❌
   - "Success 1", "Error 1" ❌
   - "Success 1", "Error 1", "Success 2" ❌
   - "Error 1", "Success 2" ✅

    __OAs:__ [Encadenamiento de promesas](https://javascript.info/promise-chaining),
    [Manejo de errores en promesas](https://javascript.info/promise-error-handling)

9. Qué imprime console.log?

    ```js
    function createUser() {
      return Promise.resolve('Success!');
    }

    createUser()
      .then(response => {
        return response.toUpperCase()
      })
      .then(response => {
        console.log(response)
      })
    ```

   - "Success!" ❌
   - "Success!", "SUCCESS!" ❌
   - "SUCCESS!" ✅
   - Error ❌

    __OAs:__ [Encadenamiento de promesas](https://javascript.info/promise-chaining)

10. Qué imprime console.log al dar click sobre el div start?

    ```html
    <div id="parent">
      <div id="start">
        Start
      </div>
    </div>
    <script>
      document.querySelector('#start').addEventListener('click', () => {
        console.log('start');
      });
      document.querySelector('#parent').addEventListener('click', () => {
        console.log('parent');
      });
      document.addEventListener('click', () => {
        console.log('document');
      });
      window.addEventListener('click', () => {
        console.log('window');
      });
    </script>
    ```

    - window, document, parent, start ❌
    - start, parent, document, window ✅
    - document, parent, start ❌

    __OAs__: [Propagación de eventos](https://www.freecodecamp.org/news/a-simplified-explanation-of-event-propagation-in-javascript-f9de7961a06e/)
