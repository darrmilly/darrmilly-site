<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DarrMilly Studio</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      background-color: #FAF5EF; /* Fondo crema suave */
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 40px 20px;
      min-height: 100vh;
    }

    .container {
      max-width: 900px;
      width: 100%;
      text-align: center;
    }

    /* Banner superior tinto */
    .hero-banner {
      background-color: #801313; /* Rojo tinto */
      border-radius: 28px;
      padding: 40px 20px;
      margin-bottom: 50px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }

    .hero-banner h1 {
      color: #D4AF37; /* Dorado */
      font-size: 2.2rem;
      letter-spacing: 2px;
      font-family: 'Times New Roman', Times, serif;
      font-weight: normal;
      margin-bottom: 15px;
      text-transform: uppercase;
    }

    .logo-monogram {
      color: #D4AF37;
      font-size: 3.5rem;
      font-family: 'Georgia', serif;
      letter-spacing: -4px;
      font-weight: bold;
      line-height: 1;
    }

    /* Sección inferior con la firma y marca */
    .profile-section {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 30px;
      flex-wrap: wrap;
      margin-top: 20px;
    }

    .author-info {
      display: flex;
      align-items: center;
      gap: 12px;
      text-align: left;
    }

    .by-badge {
      background-color: #801313;
      color: #D4AF37;
      font-family: 'Georgia', cursive, serif;
      font-style: italic;
      font-size: 1.2rem;
      width: 42px;
      height: 42px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .author-text h2 {
      color: #801313;
      font-size: 1.3rem;
      font-weight: 600;
      letter-spacing: 1px;
    }

    .author-text p {
      color: #801313;
      font-size: 0.95rem;
      margin-top: 2px;
    }

    /* Espacio para colocar la ilustración si tienes el archivo de imagen */
    .illustration {
      max-width: 180px;
      height: auto;
    }
  </style>
</head>
<body>

  <div class="container">
    <!-- Banner tinto con título y logo -->
    <div class="hero-banner">
      <h1>WELCOME TO DARRMILLY STUDIO</h1>
      <div class="logo-monogram">DM</div>
    </div>

    <!-- Firma de marca -->
    <div class="profile-section">
      <!-- Si tienes guardada la imagen de la chica con el café, puedes cambiar src="tu-imagen.png" -->
      <!-- <img src="ilustracion.png" alt="DarrMilly Illustration" class="illustration"> -->

      <div class="author-info">
        <div class="by-badge">by</div>
        <div class="author-text">
          <h2>MARIA DUNN</h2>
          <p>Visual Quotes & Digital Design</p>
        </div>
      </div>
    </div>
  </div>

</body>
</html>
