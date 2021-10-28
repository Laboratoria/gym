# Sesión 13 - 28/10/2021

## Ejercicios

 | Ejercicio                                                        | Complejidad                    | Etiquetas                    | OAs                                                                               |
 | ---------------------------------------------------------------- | ------------------------------ | ---------------------------- | --------------------------------------------------------------------------------- |
 | [**The Race Between Hare and Tortoise**](../../exercises/hare-and-tortoise/README.md) | :suspect: **Warm-up** | `strings`, `conditionals` | <ul><li> Uso de condicionales (if-else | switch | operador ternario) </li><li> Manipulación de strings </li></ul>  |
 | [**Mutual Recursion**](../../exercises/mutual-recursion/README.md) | :rage1: **Challenge** | `recursion` | <ul><li>Recursividad</li></ul>  |
 | [**HackerRank in a string**](../../exercises/hackerrank-in-a-string/README.md) | :godmode: **Hacker Edition** | `strings`, `regex` | <ul><li> Manipulación de strings </li><li>Uso de expresiones regulares</li></ul>  |

## Kahoot

🔗[https://create.kahoot.it/share/kahoot-13-el-terror-de-javascript/4236e675-3c7e-4f73-ae64-0f19ba7d76d3](https://create.kahoot.it/share/kahoot-13-el-terror-de-javascript/4236e675-3c7e-4f73-ae64-0f19ba7d76d3)

1. Sincronía son tareas que tienen que esperar a que ocurra un determinado suceso?

   - true ❌
   - false ✅

    __OAs:__ [Asincronia](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction)

2. Cual es el propósito principal de Promise.all??

   - Las funciones pueden contener una secuencia de sentencias. ❌
   - Las funciones pueden ser ejecutadas multiples veces. ❌
   - Las funciones son siempre ejecutadas primero. ✅
   - Las funciones son objetos. ❌

    __OAs:__ [Consumo de promesas](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)

3. Cual es la diferencia principal entre While & Do While??

   - Antes se usaba Do While y ahora solo While ❌
   - Ninguna diferencia ❌
   - Do While se ejecuta por lo menos la primer iteración. ✅
   - While se ejecuta siempre y cuando la condición se cumpla y do while no ❌

    __OAs:__ [bucles](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/do...while)

4. ¿Qué combiene usar para manejar las excepciones en async/await??

   - only catch ❌
   - .then ❌
   - reject ❌
   - try/catch ✅

    __OAs:__ [excepciones](https://javascript.info/async-await)

5. Para promesas usamos .then/.catch y para funciones asíncronas usamos try/catch?

   - True ✅
   - False ❌

    __OAs:__ [excepciones](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch)

6. finally se ejecuta antes de catch?

   - True ❌
   - False ✅

    __OAs:__ [Consumo de promesas](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally)

7. Que hace Promise.race?

   - Resuelve la promesa más rápida y sin error ✅
   - Resuelve más rápido una promesa especificada en el envío ❌
   - Retorna rápidamente la primer promesa en cola ❌
   - Fuerza una rápida ejecución de promesas simultáneas. ❌

    __OAs:__ [Consumo de promesas](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise/race)

8. Que se imprime en consola cuando se ejecuta...?

    ```js
    function resolveAfter2Seconds() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve('resolved');
        }, 2000);
      });
    }

    async function asyncCall() {
      console.log('calling');
      const result = await resolveAfter2Seconds();
      console.log(result);
    }

    asyncCall();
    ```

   - > "calling" ❌
   - > "resolved"❌
   - > "calling" > "resolved"✅
   - > "resolved" > "calling" ❌

    __OAs:__ [Asincronia](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/async_function)

9. usamos await para especificar que nuestra función es asíncrona?

   - True ❌
   - False ✅

    __OAs:__ [Función async](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/async_function)

10. La diferencia principal entre throw "I'm evil" y throw Error({error:"I'm evil"})?

    - throw es mas personalizado ❌
    - throw Error es mas descriptivo ✅
    - throw es mas rápido y optimo ❌
    - throw Error no esta optimizado ❌

    __OAs__: [throw](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/throw)
