<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>DarrMilly Studio</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;1,400&display=swap" rel="stylesheet">
<style>
* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  background-color: #fbf5ee;
  font-family: 'Lora', Georgia, 'Times New Roman', serif;
  padding: 40px 20px;
  min-height: 100vh;
}

.container { max-width: 1000px; margin: 0 auto; }

.hero-banner {
  background-color: #940808;
  border-radius: 28px;
  padding: 36px 20px 30px;
  text-align: center;
}

.hero-banner h1 {
  color: #C9A227;
  font-family: 'Lora', Georgia, serif;
  font-weight: 400;
  font-size: clamp(1.4rem, 4.6vw, 2.8rem);
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 18px;
}

.logo-dm { 
  height: 70px; 
  width: auto; 
  display: block; 
  margin: 0 auto; 
}

.profile-section {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 15%;
  margin-top: 50px;
  position: relative;
}

.profile-section .author-info { 
  position: absolute; 
  left: 45%; 
  top: 50%; 
  transform: translateY(-50%); 
}

.illustration { 
  width: 21%; 
  min-width: 190px; 
  height: auto; 
}

.author-info { 
  display: flex; 
  align-items: center; 
  gap: 14px; 
  text-align: left; 
}

.by-badge {
  background-color: #940808;
  color: #C9A227;
  font-family: 'Lora', Georgia, serif;
  font-style: italic;
  font-size: 1.3rem;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.author-text h2 { 
  color: #940808; 
  font-weight: 400; 
  font-size: 1.5rem; 
  letter-spacing: 1px; 
}

.author-text p  { 
  color: #940808; 
  font-size: 1rem; 
  margin-top: 2px; 
}

/* Adaptación para celular */
@media (max-width: 700px) {
  body {
    padding: 20px 15px;
  }

  .hero-banner {
    padding: 28px 15px 24px;
    border-radius: 22px;
  }

  .hero-banner h1 {
    font-size: clamp(1.1rem, 4.3vw, 1.6rem);
    margin-bottom: 14px;
  }

  .logo-dm {
    height: 55px;
  }

  .profile-section {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 0;
    margin-top: 32px;
    gap: 20px;
  }

  .illustration {
    width: 55%;
    max-width: 220px;
    min-width: 160px;
  }

  .profile-section .author-info {
    position: static;
    transform: none;
    justify-content: center;
    gap: 12px;
  }

  .by-badge {
    width: 42px;
    height: 42px;
    font-size: 1.15rem;
  }

  .author-text h2 {
    font-size: 1.25rem;
  }

  .author-text p {
    font-size: 0.85rem;
  }
}
</style>
</head>
<body>
  <div class="container">
    <div class="hero-banner">
      <h1>Welcome to <span id="nombre">DarrMilly</span> Studio</h1>
      <img class="logo-dm" src="logo-dm.png" alt="Logo DM">
    </div>

    <div class="profile-section">
      <img class="illustration" src="ilustracion.png" alt="Ilustración de una mujer sentada tomando café">
      <div class="author-info">
        <div class="by-badge">by</div>
        <div class="author-text">
          <h2>MARIA DUNN</h2>
          <p>Visual Quotes &amp; Digital Design</p>
        </div>
      </div>
    </div>
  </div>

<script>
function alinear() {
  var n = document.getElementById('nombre');
  var p = document.querySelector('.profile-section');
  var a = p.querySelector('.author-info');
  if (window.innerWidth <= 700) { a.style.left = ''; return; }
  a.style.left = (n.getBoundingClientRect().left - p.getBoundingClientRect().left) + 'px';
}
window.addEventListener('load', alinear);
window.addEventListener('resize', alinear);
if (document.fonts && document.fonts.ready) { document.fonts.ready.then(alinear); }
</script>
</body>
</html>
