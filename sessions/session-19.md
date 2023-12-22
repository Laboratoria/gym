# Sesión 19

## Ejercicio IA

### Minesweeper

Se proporciona una plantilla en HTML y CSS con el objetivo de que implementes la funcionalidad para crear un juego de Buscaminas. Con la ayuda de herramientas como ChatGPT, deberás trabajar en el código, agregando los elementos interactivos necesarios. La plantilla proporciona un ejemplo de cómo deberían verse las celdas descubiertas.

__Características:__

- Al hacer clic en el botón central debería reiniciarse el juego.
- El tablero consta de 64 celdas, en una configuración de 8x8.
- Se recomienda tener 10 minas en el tablero.
- Se debe mostrar el tiempo (segundos) transcurrido del juego en el encabezado.

Consulta las [Reglas del Buscaminas](https://www.minesweeper.info/wiki/Windows_Minesweeper#:~:text=You%20can%20mark%20a%20mine,you%20click%20on%20a%20mine.).

__**Plantilla:**__

```html
<!DOCTYPE html>
<html lang="en">
<head>
 <title>Minesweeper</title>
 <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Orbitron:wght@900">
 <style>
  body {
   font-family: "Orbitron", sans-serif;
  }

  .cell {
   height: 24px;
   width: 24px;
   background: #ff8aae;
   border-top: 3px solid #ffb3ca;
   border-right: 3px solid #ffb3ca;
   border-bottom: 3px solid #ff618f;
   border-left: 3px solid #ff618f;
  }

  .cell:hover {
   background: #fcaac6;
   cursor: pointer;
  }

  .board {
   display: grid;
   grid-template-columns: repeat(8, 1fr);
   width: 240px;
   border-bottom: 3px solid #b3e0ff;
   border-left: 3px solid #b3e0ff;
   border-top: 3px solid #6bc1fa;
   border-right: 3px solid #6bc1fa;

  }

  .game {
   background: #9ADCFF;

   border-top: 3px solid #b3e0ff;
   border-right: 3px solid #b3e0ff;
   border-bottom: 3px solid #6bc1fa;
   border-left: 3px solid #6bc1fa;
   padding: 20px;
   width: fit-content;
  }

  .header {
   background: #FFB2A6;
   display: flex;
   justify-content: space-between;
   padding: 10px;
   border-bottom: 3px solid #b3e0ff;
   border-left: 3px solid #b3e0ff;
   border-top: 3px solid #6bc1fa;
   border-right: 3px solid #6bc1fa;
  }

  .header span {
   background: white;
   color: #fc7c68;
   border-top: 3px solid #fccac3;
   border-right: 3px solid #fccac3;
   border-bottom: 3px solid #fc7c68;
   border-left: 3px solid #fc7c68;
   font-size: 20px;
  }

  div#face {
   color: #fc7c68;
   font-size: 20px;
   background: #FFF89A;
   width: 23px;
   height: 23px;
   border-top: 3px solid #fff8c3;
   border-right: 3px solid #fdf461;
   border-bottom: 3px solid #fdf461;
   border-left: 3px solid #fff8c3;
   display: flex;
   align-items: center;
   justify-content: center;
  }

  div#face:hover {
   background: #f5eb67;
   cursor: pointer;
  }

  .touch-0,
  .touch-1,
  .touch-2,
  .touch-3,
  .touch-4,
  .touch-5,
  .touch-6,
  .touch-7,
  .touch-8,
  .mine {
   background: #fcc8d8;
   border-top: 3px solid #ff618f;
   border-right: 3px solid #ff618f;
   border-bottom: 3px solid #ffb3ca;
   border-left: 3px solid #ffb3ca;
   display: flex;
   align-items: center;
   justify-content: center;
   font-weight: bolder;
  }

  .winning, .mine {
   display: flex;
   align-items: center;
   justify-content: center;
   font-weight: bolder;
   font-size: 10px;
  }

  .game-over {
   background: #e2290e;
  }

  .touch-1 {
   color: #0a94eb;
  }

  .touch-2 {
   color: #10ba0d;
  }

  .touch-3 {
   color: #e2290e;
  }

  .touch-4 {
   color: #c116ca;
  }

  .touch-5 {
   color: #681870;
  }

  .touch-6 {
   color: #e2290e;
  }

  .touch-7 {
   color: #10ba0d;
  }

  .touch-8 {
   color: #ff618f;
  }

 </style>
</head>
<body>

<div class="game">
 <div class="header">
  <span id="minesLeft">000</span>
  <div id="face">B)</div>
  <span id="timer">000</span>
 </div>
 <div class="board">
  <div class="cell touch-0"></div>
  <div class="cell touch-1">1</div>
  <div class="cell touch-2">2</div>
  <div class="cell touch-3">3</div>
  <div class="cell touch-4">4</div>
  <div class="cell touch-5">5</div>
  <div class="cell touch-6">6</div>
  <div class="cell touch-7">7</div>
  <div class="cell touch-8">8</div>
  <div class="cell winning">&#x1F6A9;</div>
  <div class="cell mine">&#x1F4A3;</div>
  <div class="cell mine game-over">&#x1F4A3;</div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
 </div>
</div>
</body>
</html>
```
## Kahoot

- [https://create.kahoot.it/share/gym-session-19/2e0192d5-0710-45c0-a3b7-e7df38301684](https://create.kahoot.it/share/gym-session-19/2e0192d5-0710-45c0-a3b7-e7df38301684)
