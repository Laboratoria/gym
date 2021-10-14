# Sesión 3 - 12/08/2021

## Ejercicios

| Ejercicio                                                        | Complejidad                    | Etiquetas                    | OAs                                                                               |
| ---------------------------------------------------------------- | ------------------------------ | ---------------------------- | --------------------------------------------------------------------------------- |
| [**Remove String Spaces**](../../exercises/remove-string-spaces)   | :suspect: **Warm-up**        | `strings`          | <ul><li> Manipulación de strings </li></ul>                             |
| [**Transformation iteration!**](../../exercises/transformation-iteration) | :rage1: **Challenge** | `strings`, `arrays` | <ul><li> Manipulación de strings</li><li> Métodos de arrays </li></ul>  |
| [**Highest and Lowest**](../../exercises/highest-lowest) | :godmode: **Hacker Edition** | `strings`, `loops`, `numbers` | <ul><li> Manipulación de strings</li></ul>  |
| [**Unique Morse Code Words**](../../exercises/morse-code) | :godmode: **Hacker Edition** | `strings`, `objects`, `arrays` | <ul><li> Manipulación de strings</li><li> Métodos de arreglos</li><li> Objetos</li></ul>  |

## Kahoot

[https://create.kahoot.it/share/session-3-gym/59f45d75-411e-4ff1-8e4c-6830d17fe8a3](https://create.kahoot.it/share/session-3-gym/59f45d75-411e-4ff1-8e4c-6830d17fe8a3)

1. ¿Qué imprimiría la consola en el siguiente código?

    ```js
    const nombre = 'Carlos';
    const apellido = 'Mendoza';

    const superCoach = `
    ${ nombre }
    ${ apellido }
    `
    ```

    -

    ```js
    Carlos ✅
    Mendoza
    ```

    - undefined ❌
    - Carlos Mendoza ❌
    - CarlosMendoza ❌

2. ¿Cómo puedo imprimir en consola el nombre de persona?

    ```js
    const persona = {
      nombre: 'Chuchita',
      apellido: 'Pérez',
      edad: 31
    }
    ```

   - console.log(persona) ❌
   - console.log(persona.nombre) ✅
   - console.log(persona.name) ❌
   - console.log(nombre) ❌

3. El siguiente código imprimirá en consola el arreglo [2,4,6,8]

    ```js
    const arreglo = [1,2,3,4];
    const arregloIterado = arreglo.map(function (numero) {
      numero * 2
    })
    ```

   - True ❌
   - False ✅

4. La función saludar también se puede escribir como la función saludar2

    ```js
    const saludar = function (nombre) {
      return `Hola, ${nombre}`;
    }

    const saludar2 = ( nombre ) => `Hola, ${nombre}`;
    ```

   - True ✅
   - False ❌

5. ¿Qué imprimirá la consola en el siguiente código?

    ```js
    const activo = true;
    const mensaje = activo ? 'Activo' : 'Inactivo';
    console.log(mensaje)
    ```

   - Inactivo ❌
   - Activo ✅
   - Null ❌
   - Undefined ❌

6. Selecciona los ejemplos de datos atómicos

   - number ✅
   - boolean ✅
   - array ❌
   - string ✅

7. Selecciona los códigos con error

   ```js
   const person = 'Nick'; ✅
   person = 'John';
   ```

   ```js
   let person = 'Alberto'; ❌
   person = 'Juan';
   ```

   ```js
   const person = { ❌
     name: 'Nick',
     age: 45
   }
   person.name = 'John';
   console.log(person.name)
   ```

   ```js
   function printUser () { ✅
     let user = 'Nick';
     console.log(user)
   }
   console.log(user)
   ```

8. El siguiente fragmento de código es una expresión

    ```js
    function printStar ( num ){
      let string = '':

      for (let i = 0; i < num; i++) {
        string += '*';
      }

      return string;
    }
    ```

   - True ❌
   - False ✅

9. Selecciona buenas prácticas para JS

   - Utilizar camelCase para nombrar funciones, declaración de variables, etc. ✅
   - Asignar un nombre semántico a archivos, variables, funciones, etc. ✅
   - Agregar comentarios solo cuando sea necesario ✅
   - Colocar la llave de apertura en la misma lí­nea de la sentencia. ✅

10. Esta propiedad de Flexbox alinea los elementos flexibles a lo largo del eje
principal del contenedor.

    - align-items ❌
    - align-content ❌
    - flex-direction ❌
    - justify-content ✅
