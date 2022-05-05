# Recursion 101

https://www.codewars.com/kata/5b752a42b11814b09c00005d

En este Kata, te serán dados dos números enteros positivos a y b,
y tu tarea será aplicar los siguientes pasos:

i) Si a=0 o b=0, retorne [a,b]. De otro modo, seguir al paso (ii);
ii) Si a ≥ 2*b, entonces haremos que a = a - 2*b, y repetiremos el paso (i).
De otro modo, seguir al paso (iii);
iii) Si b ≥ 2*a, entonces haremos que b = b - 2*a, y repetiremos el paso (i).
De otro modo, retorne [a,b].

Tanto a como b serán menores que 10E8.
