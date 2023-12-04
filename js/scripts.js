nav = `
<header class="header">
  <div class="logo">
  <a  href="../index.html">
    <h1 >
      Renov <span >Arte</span>
    </h1>
    </a>
  </div>
    
  <nav>
    <ul class="nav-links">
      <li><a  href="../index.html">Inicio</a></li>
      <li><a href="../#sobre-nosotros">Nosotros</a></li>
      <li><a  href="../#productos">Restauraciones</a></li>
      <li><a href="../view/galeria.html">Galeria</a></li>
      <li><a href="../productos.html">Productos</a></li>
      <li><a href="../view/contacto.html">Contacto</a></li>
      <li><a href="../view/register.html" class="btn-register">Registro</a></li>
    </ul>            
  </nav>
    
  <a onclick="openNav()" class="menu" href="#"><button><i class="fas fa-bars"></i></button></a>
    
  <div id="mobile-menu" class="overlay">
    <a onclick="closeNav()" href="" class="close">&times;</a>
      <div class="overlay-content">
          <a  href="../index.html">Inicio</a>
          <a href="../#sobre-nosotros">Nosotros</a>
          <a  href="../#productos">Restauraciones</a>
          <a href="../view/galeria.html">Galeria</a>
          <a href="../view/contacto.html">Contacto</a>
          <a href="../view/register.html" class="btn-register">Registro</a>   
        </div>
  </div>

</header>
`;
document.getElementById("navbar").innerHTML = nav;

//footer
footer = `
<div class="containerFooter">
  <div class="partes">
    <h3 >Categorías</h3>
    <div class="info">
      <a href="#" >Cocina</a>
      <a href="#" >Oficina</a>
      <a href="#" >Jardín</a>
      <a href="#" >Dormitorios</a>
    </div>
  </div>

  <div class="partes">
    <h3 >Sobre Nosotros</h3>
    <div class="info">
      <a href="#" >Nuestra Historia</a>
      <a href="#" >Misión, Visión y Valores</a>
      <a href="#" >Carreras</a>
      <a href="#" >Políticas de Privacidad</a>
      <a href="#" >Términos del Servicio</a>
    </div>
  </div>

  <div class="partes">
    <h3 >Soporte</h3>
    <div class="info">
      <a href="#" >Preguntas Frecuentes</a>
      <a href="#" >Ayuda en línea</a>
      <a href="#" >Confianza y Seguridad</a>
    </div>
  </div>
</div>

<div class="conteinerIcon">
  <a href="https://www.instagram.com/renovarte.sn/?theme=dark" >
    <i class="fab fa-instagram"></i>
  </a>
  <a href="https://www.facebook.com/profile.php?id=100093497345781" >
    <i class="fab fa-facebook"></i> 
  </a>
  <a href="#" >
    <i class="fab fa-whatsapp"></i>
  </a>
</div>

<p class="Copy">
  Todos los Derechos Reservados - RenovArte
</p>
`;

document.getElementById("footer").innerHTML = footer;

//menu
function openNav() {
  document.getElementById("mobile-menu").style.width = "100%";
}

function closeNav() {
  document.getElementById("mobile-menu").style.width = "0%";
}
