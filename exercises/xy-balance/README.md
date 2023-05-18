---
difficulty:
  - intermediate
OAs:
  - strings
  - recursion
projects:
  - md-links
---

# XY Balance

[https://the-winter.github.io/codingjs/exercise.html?name=xyBalance&title=String-2](https://the-winter.github.io/codingjs/exercise.html?name=xyBalance&title=String-2)

Diremos que una cadena está equilibrada xy si para todos los caracteres "x" de la cadena, existe un carácter "y" en algún punto posterior de la cadena. Por tanto, "xxy" está equilibrada, pero "xyx" no. Una 'y' puede equilibrar varias 'x'. Devuelve true si la cadena está equilibrada con xy.

Ejemplos

    xyBalance('aaxbby') → true
    xyBalance('aaxbb') → false
    xyBalance('yaaxbb') → false
