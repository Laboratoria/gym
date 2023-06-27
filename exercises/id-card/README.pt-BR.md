---
difficulty:
  - advanced
OAs:
  - analysis
  - HTML
  - CSS
  - JS
projects:
  - burger-queen
  - api-client
---

# Laboratoria ID

É fornecido um modelo em HTML e CSS com o objetivo de fornecer funcionalidade para criar uma identificação personalizada.
Usando ferramentas como ChatGPT, você deve trabalhar no código, adicionando os elementos interativos necessários para obter o nome do usuário,
permitir que ele desenhe sua assinatura e capture uma foto da webcam. Ao finalizar, a página da web permitirá que um usuário insira seu nome,
desenhe sua assinatura e capture uma foto em tempo real da webcam, gerando assim uma identificação completa e personalizada.

Bônus:

Além dos requisitos mencionados anteriormente, como um bônus adicional,
você deve implementar a funcionalidade de baixar a identificação gerada como um arquivo.


__Template__

```html
<!DOCTYPE html>
<html>
<head>
    <title>ID Card</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Title</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
            crossorigin="anonymous"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

        body {
            padding: 10px;
            font-family: 'Roboto', Arial, sans-serif;
            display: flex;
            justify-content: space-around;
        }

        .div-output {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
        }

        .id-card {
            height: 480px;
            width: 360px;
            border: 1px solid black;
            border-radius: 20px;
            display: grid;
            align-content: stretch;
            grid-template-rows: 1fr 8fr;
        }

        .header {
            background: black;
            color: white;
            border-radius: 20px 20px 0 0;
            padding: 10px 20px;
            display: flex;
            justify-content: center;
        }

        h1 {
            margin: 0;
        }

        .main {
            display: grid;
        }

        .media {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
        }

        .photo {
            width: 180px;
            height: 225px;
            background-image: url(http://via.placeholder.com/640x360);
            background-size: cover;
            background-position: center;
            margin-bottom: 20px;
            display: flex;
            justify-content: center;
            align-items: stretch;
            overflow: hidden;
        }

        .data {
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
        }

        .name {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 10px;
        }

        .signature {
            height: 50px;
            display: flex;
            align-items: flex-end;
        }

        #sign-pad {
            cursor: crosshair;
        }

        .form-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .form-names-group {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
        }
        #preview-img{
            width: 180px;
            height: 224px;
            display: flex;
            justify-content: center;
            align-items: stretch;
            border: 1px solid black;
            overflow: hidden;
        }
    </style>
</head>
<body>
<div>
    <form id="data-form">
        <div class="form-header">
            <h2>User's data</h2>
            <button id="submit-btn" type="submit" class="btn btn-primary">Submit</button>
        </div>
        <div class="form-names-group">
            <div>
                <label for="given-name-input" class="form-label">Given Name</label>
                <input type="text" class="form-control" id="given-name-input" required>
            </div>
            <div>
                <label for="last-name-input" class="form-label">Last Name</label>
                <input type="text" class="form-control" id="last-name-input" required>
            </div>
        </div>
        <div>
            <label for="sign-pad">Signature</label>
            <canvas class="card" id="sign-pad" width="400" height="200"></canvas>
            <button id="clear-btn" type="button" class="btn btn-outline-info">Clear</button>
        </div>
        <div>
            <label for="videoWebCam">Picture</label>
            <video class="card" id="videoWebCam" width="640" height="480" autoplay></video>
            <canvas id="canvas-video" width="640" height="480" style="display: none;"></canvas>
            <div id="preview-img"></div>
            <button id="capture-btn" type="button" class="btn btn-outline-info">Capture</button>
        </div>
    </form>
</div>
<div class="div-output">
    <div class="id-card" id="id-card">
        <div class="header"><h1>&lt;Laboratoria&gt;</h1></div>
        <div class="main">
            <div class="media">
                <div class="photo" id="id-photo"></div>
                <div class="signature" id="id-sign">Signature here</div>
            </div>
            <div class="data">
                <h2 class="name"><span id="given-name">Given Name</span> <small><span id="last-name">Last Name</span></small></h2>
                <h5><small>Exp: 21/Jun/2025</small></h5>
            </div>
        </div>
    </div>

    <button class="btn btn-secondary btn-sm" id="download-btn">Download</button>
</div>
<script>
    // Your code here
    /**
     * Sign feature
     * **/

    /**
     * Picture feature
     * **/

    /**
     * OnSubmit
     * **/

    /**
     * Bonus: Download ID
     * **/
</script>
</body>
</html>
```
