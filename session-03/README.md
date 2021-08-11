# Sesión 3

## Ejercicios

| Ejercicio                                                        | Complejidad                    | Etiquetas                    | OAs                                                                               |
| ---------------------------------------------------------------- | ------------------------------ | ---------------------------- | --------------------------------------------------------------------------------- |
| [**Remove String Spaces**](exercises/remove-string-spaces/README.md)   | :suspect: **Warm-up**        | `strings`          | <ul><li> Manipulación de strings </li></ul>                             |
| [**Transformation iteration!**](./exercises/transformation-iteration/README.md) | :rage1: **Challenge** | `strings`, `arrays` | <ul><li> Manipulación de strings</li><li> Métodos de arrays </li></ul>  |
| [**Highest and Lowest**](./exercises/highest-lowest/README.md) | :godmode: **Hacker Edition** | `strings`, `loops`, `numbers` | <ul><li> Manipulación de strings</li></ul>  |
| [**Unique Morse Code Words**](./exercises/morse-code/README.md) | :godmode: **Hacker Edition** | `strings`, `objects`, `arrays` | <ul><li> Manipulación de strings</li><li> Métodos de arreglos</li><li> Objetos</li></ul>  |

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
```js

- [x]

Carlos
Mendoza    
- [ ] undefined
- [ ] Carlos Mendoza
- [ ] CarlosMendoza

2. ¿Cómo puedo imprimir en consola el nombre de persona?

```js
const persona = {
    nombre: 'Chuchita',
    apellido: 'Pérez',
    edad: 31
}
```js
- [ ] console.log(persona)
- [x] console.log(persona.nombre)
- [ ] console.log(persona.name)
- [ ] console.log(nombre)

3. El siguiente código imprimirá en consola el arreglo [2,4,6,8]
```js
const arreglo = [1,2,3,4];
const arregloIterado = arreglo.map(function (numero) {
    numero * 2
})
```js
- [ ] True
- [x] False

4. La función saludar también se puede escribir como la función saludar2

```js
const saludar = function (nombre) {
    return `Hola, ${nombre}`;
}

const saludar2 = ( nombre ) => `Hola, ${nombre}`;
```js
- [x] True
- [ ] False

5. ¿Qué imprimirá la consola en el siguiente código?

```js
const activo = true;

const mensaje = activo ? 'Activo' : 'Inactivo';
console.log(mensaje)
```js

- [ ] Inactivo
- [x] Activo
- [ ] Null
- [ ] Undefined

6. Selecciona los ejemplos de datos atómicos

- [x] number
- [x] boolean
- [ ] array
- [x] string

7. Selecciona los códigos con error

- [x]
```js
const person = 'Nick';
person = 'John';
```js

- [ ]
```js
let person = 'Alberto';
person = 'Juan';
```js

```js
const person = {
    name: 'Nick',
    age: 45
}
person.name = 'John';
console.log(person.name)
```js

- [x]
```js
function printUser () {
    let user = 'Nick';
    console.log(user)
}
console.log(user)
```js

8. El siguiente fragmento de código es una expresión
```js
function printStar ( num ){
    let string = '':

    for (let i = 0; i < num; i++) {
        string += '*';
    }

    return string;
}
```js

- [ ] True
- [x] False

9. Selecciona buenas prácticas para JS

- [x] Utilizar camelCase para nombrar funciones, declaración de variables, etc.
- [x] Asignar un nombre semántico a archivos, variables, funciones, etc.
- [x] Agregar comentarios solo cuando sea necesario
- [x] Colocar la llave de apertura en la misma lí­nea de la sentencia.

10. Esta propiedad de Flexbox alinea los elementos flexibles a lo largo del eje principal del contenedor.

- [ ] align-items
- [ ] align-content
- [ ] flex-direction
- [x] justify-content
