---
difficulty:
  - difficult
---

# The Lift

[https://www.codewars.com/kata/58905bfa1decb981da00009e/train/javascript](https://www.codewars.com/kata/58905bfa1decb981da00009e/train/javascript)

## Sinopsis

Un edificio de varios pisos tiene un ascensor.

La gente espera en fila en cada piso por el ascensor.

El piso al que quieren ir está representado por un número
(será el número del botón que presionarán cuando entren al ascensor).

```js
ANTES (gente esperando en cola)               DESPUÉS (gente en su destino)
                   +--+                                          +--+
  /----------------|  |----------------\        /----------------|  |----------------\
10|                |  | 1,4,3,2        |      10|             10 |  |                |
  |----------------|  |----------------|        |----------------|  |----------------|
 9|                |  | 1,10,2         |       9|                |  |                |
  |----------------|  |----------------|        |----------------|  |----------------|
 8|                |  |                |       8|                |  |                |
  |----------------|  |----------------|        |----------------|  |----------------|
 7|                |  | 3,6,4,5,6      |       7|                |  |                |
  |----------------|  |----------------|        |----------------|  |----------------|
 6|                |  |                |       6|          6,6,6 |  |                |
  |----------------|  |----------------|        |----------------|  |----------------|
 5|                |  |                |       5|            5,5 |  |                |
  |----------------|  |----------------|        |----------------|  |----------------|
 4|                |  | 0,0,0          |       4|          4,4,4 |  |                |
  |----------------|  |----------------|        |----------------|  |----------------|
 3|                |  |                |       3|            3,3 |  |                |
  |----------------|  |----------------|        |----------------|  |----------------|
 2|                |  | 4              |       2|          2,2,2 |  |                |
  |----------------|  |----------------|        |----------------|  |----------------|
 1|                |  | 6,5,2          |       1|            1,1 |  |                |
  |----------------|  |----------------|        |----------------|  |----------------|
 G|                |  |                |       G|          0,0,0 |  |                |
  |====================================|        |====================================|
```

## Reglas

### Reglas del ascensor

* ¡El ascensor solo sube o baja!
* Cada piso tiene botones para SUBIR y para BAJAR
(excepto el primer y último piso, los cuales tienen
solo SUBIR o BAJAR respectivamente)
* El ascensor nunca cambia de dirección a menos que no haya más gente
esperando subir o bajar en la dirección en la que va
* Cuando está vacío, el ascensor intentará ser inteligente. Por ejemplo:
  - Si iba hacia arriba, podrá continuar hacia arriba para recoger
  a la persona en el piso más alto, que quiera bajar.
  - Si iba hacia abajo, entonces podrá seguir hacia abajo para recoger
  a la persona en el piso más bajo, que quiera subir.
* El ascensor tiene una capacidad máxima de personas
* Al ser llamado, el ascensor se detendrá aunque esté lleno,
aunque - a menos que alguien se baje - ¡nadie más podrá subir!
* Si el ascensor está vacío, y nadie espera por él,
entonces deberá volver al primer piso

### Reglas para personas

* La gente espera en "filas" que representan su orden de llegada a la espera
del ascensor
* Toda persona puede oprimir los botones de SUBIR o BAJAR para llamar al ascensor
* Solo la gente que va en la misma dirección que el ascensor podrá entrar en él
* La entrada es de acuerdo al orden de la "fila", aunque - aquellos
que no puedan entrar no bloquean a los que estén por detrás que sí
puedan entrar al ascensor
* Si una persona no puede entrar al ascensor, oprimirá el botón de llamada
SUBIR/BAJAR nuevamente una vez que el ascensor haya partido sin ella

### Tarea del Kata

* Llevar a todas las personas a los pisos a los que desean ir, obedeciendo las reglas
para el ascensor y las reglas para personas
* **Retorna una lista de todos los pisos que el ascensor visitó (en el orden visitado!)**

## Entrada y Salida

### Entrada

* `queues` una lista con las personas en cola para cada piso del edificio
* La altura del edificio varía
* 0 = la planta base
* No hay cola en cada piso
* El elemento 0 es el primero de cada cola
* Los números indican a qué piso quiere ir la persona
* `capacity` indica la capacidad máxima del ascensor

_Validación de parámetros_ Podemos asumir que los parámetros están OK. No hay necesidad
de comprobar cosas como:

* Que la gente quiera ir a pisos que no existen
* Que la gente quiera ir a un piso en el que ya está
* Edificios con menos de 2 pisos
* Sótanos

### Salida

* **Una lista de todos los pisos que el ascensor visitó (en el orden visitado!)**
