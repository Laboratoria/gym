# Sesión 7 - 09/09/2021

## Kahoot

🔗[https://create.kahoot.it/details/9a45a6f7-b1cc-4e67-b2db-0bd83ac32a58](https://create.kahoot.it/details/9a45a6f7-b1cc-4e67-b2db-0bd83ac32a58)

1. ¿Qué retorna Object.keys(artistsAndSongs) luego de ejecutar este código ?

    ```js
    const artistsAndSongs = {
      "Prince": ["Purple Rain", "When Doves Cry"],
      "The Beatles": ["Revolution", "Norwegian Wood"],
      "Joni Mitchell": ["A Caso of You", "Sunny SunDay"],
      "Justin Bieber": ["Baby"]
    }

    artistsAndSongs['Daft Punk'] = ["Harder, Better, Faster, Stronger"]

    delete artistsAndSongs["Justin Bieber"]
    ```

    ```js
    - ['Prince', 'The Beatles', 'Joni Mitchell', 'Justin Bieber'] ✅
    - ['Prince', 'The Beatles', 'Joni Mitchell', 'Justing Bieber', 'Daft Punk']❌
    - Error ❌
    - ['Prince', 'The Beatles', 'Joni Mitchell', 'Daft Punk'] ❌
    ```

2. ¿Qué imprime console.log?

    ```js
    const arr1 = ["Apple", "Banana"];
    const arr2 =  arr1.concat();
    arr2[0] = "Pineapple";
    console.log(arr1);
    ```

    ```js
    - ["Apple", "Banana"] ✅
    - ["Pineapple", "Banana"] ❌
    - SyntaxError: missing argument for concat() ❌
    - ["Apple", "Banana", "Pineapple"] ❌
    ```

3. ¿Qué imprime console.log?

    ```js
    const game = { title: "tic tac toe" };
    let same_game = { title: "tic tac toe" };

    console.log(game === same_game);
    ```

    - True ❌
    - False ✅

4. ¿Qué imprime console.log?

    ```js
    const game = { title: "tic tac toe" };
    const game2 = game;
    game2.title = "What do you meme?";

    console.log(game);
    ```

    ```js
    - { title: "tic tac toe" } ❌
    - { title: "What do you meme?" } ✅
    - Error ❌
    - NA
    ```

5. ¿Qué imprime console.log?

    ```js
    let a = 10;

    function print(a) {
      a = 20;
      return a;
    }

    console.log(print(a));
    console.log(a)
    ```

    - 10 y 20 ❌
    - 20 y 10 ✅
    - 20 y 20 ❌
    - NA ❌

6. ¿Qué estructura HTML retorna la variable "container"?

    ```js
    const title = document.createElement('h2');
    heading.textContent = 'Title'
    const img = document.createElement('img');
    img.src = './img/pic.jpg';

    const container = document.createElement('div');
    container.append(title, img)
    ```

    ```html
    - <div><h2>Title</h2><img src="./img/pic.jpg" /></div> ✅
    - <div><h2>Title</h2></div> ❌
    - Invalid arguments: "img" is not a HTMLElement ❌
    - NA
    ```

7. ¿Qué elementos HTML imprime console.log al dar click a la imagen?

    ```html
    <div class="card">
      <img src="https://lol.com/img/Aatrox.png" />
      <p>Aatrox</p>
    </div>

    <script>
      const card = document.querySelector(".card");
      card.addEventListener("click", (e) => {
        console.log(e.target);
        console.log(e.currentTarget);
      });
    </script>
    ```

    ```html
    - <div> y <img> ❌
    - <img> y <div> ✅
    - <p> y <div> ❌
    - <div> y undefined ❌
    ```

8. ¿Qué imprime console.log?

    ```js
    const num1 = 10;
    const num2 = 20;

    const suma = sumar(num1, num2);
    console.log(suma)

    const diferencia = restar(num1, num2);
    console.log(diferencia);

    function sumar(a, b) {
      return a + b;
    }

    const restar = function (a, b) {
      return a - b;
    };
    ```

    - 30 y 10 ❌
    - 30 y -10 ❌
    - Uncaught ReferenceError: Cannot access 'restar' before initialization ❌
    - 30 y Uncaught ReferenceError: Cannot access 'restar' before initialization ✅

9. ¿Qué imprime console.log?

    ```js
    console.log(num1);
    console.log(num2);

    var num1 = 1;
    const num2 = 2;
    ```

    - 1 y 2 ❌
    - undefined y undefined ❌
    - 1 y undefined ❌
    - undefined y "Cannot access 'num2' before initialization" ✅

10. ¿Qué imprime console.log?

    ```js
    console.log('Start');

    setTimeout(function() {
      console.log('Ejecutar console.log luego de 0 ms');
    }, 0);

    console.log('End');
    ```

    - Start, Ejecutar console.log luego de 0 ms, End ❌
    - Start, End ❌
    - Start, End, Ejecutar console.log luego de 0 ms ✅
    - NA ❌
