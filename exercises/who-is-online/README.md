# Who's online?

[https://www.codewars.com/kata/5b6375f707a2664ada00002a/train/javascript](https://www.codewars.com/kata/5b6375f707a2664ada00002a/train/javascript)

Tienes una app de grupo de chat, pero sabes quien esta online?

Quieres mostrar a tus usuarios cuales de sus amigos están online y disponibles
para chatear!

Dado un arreglo de objetos que contiene nombres de usuario, estado y tiempo desde
la ultima actividad (en minutos), crea una función para determinar quien esta
`online`, `offline` y `away`.

Si alguien esta `online` pero su `lastActivity` fue hace mas de 10 minutos entonces
es considerado `away`.

Los datos de entrada tienen la siguiente estructura:

```js
[{
  username: 'David',
  status: 'online',
  lastActivity: 10
}, {
  username: 'Lucy',
  status: 'offline',
  lastActivity: 22
}, {
  username: 'Bob',
  status: 'online',
  lastActivity: 104
}]
```

La salida correspondiente luce como sigue:

```js
{
  online: ['David'],
  offline: ['Lucy'],
  away: ['Bob']
}
```

Si por ejemplo, ningún usuario esta online la salida debería lucir como sigue:

```js
{
  offline: ['Lucy'],
  away: ['Bob']
}
```

username sera siempre un string, status sera siempre ya sea `online` o `offline`
y `lastActivity` sera siempre un numero >= 0.

Finalmente, si no tienes ningún amigo in tu app de chat, el input sera un arreglo
vació `[]`. En este caso deberías retornar un objeto vació `{}`

## Objetivos de aprendizaje (OAs)

- Objetos (key, value)
