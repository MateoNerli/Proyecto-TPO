//header
header = `<div class="flex items-center justify-center">
<h1 class="text-5xl text-center my-14">
  Renov <span class="text-[#8d4925]">Arte</span>
</h1>

</div>


`;
document.getElementById("header").innerHTML = header;

//MENU
menu = `

<i id="menu-toggle" class="fas fa-bars block p-4 text-2xl cursor-pointer "></i>
<i id="close-toggle" class="hidden fas fa-times block p-4 text-2xl cursor-pointer border-t-2"></i>

`;

document.getElementById("menu").innerHTML = menu;

//navbar

nav = `
<nav id="navbar" class="hidden md:flex justify-center items-center py-4 border-t-2">
  <a class="items-center block p-4 text-2xl hover:border-b-2" href="./index.html">Inicio</a>
  <a class="items-center block p-4 text-2xl hover:border-b-2" href="#sobre-nosotros">Nosotros</a>
  <a class="items-center block p-4 text-2xl hover:border-b-2" href="#productos">Algunas restauraciones</a>
  <a class="items-center block p-4 text-2xl hover:border-b-2" href="./galeria.html">Galeria</a>
  <a class="items-center block p-4 text-2xl hover:border-b-2" href="./contacto.html">Contacto</a>
  <a class="items-center block p-4 text-2xl hover:border-b-2" href="login.html">Login</a>
</nav>`;
document.getElementById("navbar").innerHTML = nav;

//footer
footer = `
<div class="container mx-auto flex flex-wrap justify-between">
  <div class="w-full md:w-1/4">
    <h3 class="text-lg font-semibold mb-4">Categorías</h3>
    <nav class="space-y-2 flex flex-col">
      <a href="#" class="text-gray-400 hover:text-white">Cocina</a>
      <a href="#" class="text-gray-400 hover:text-white">Oficina</a>
      <a href="#" class="text-gray-400 hover:text-white">Jardín</a>
      <a href="#" class="text-gray-400 hover:text-white">Cochera</a>
      <a href="#" class="text-gray-400 hover:text-white">Dormitorios</a>
    </nav>
  </div>

  <div class="w-full md:w-1/4 flex flex-col">
    <h3 class="text-lg font-semibold mb-4">Sobre Nosotros</h3>
    <nav class="space-y-2">
      <a href="#" class="text-gray-400 hover:text-white">Nuestra Historia</a>
      <a href="#" class="text-gray-400 hover:text-white">Misión, Visión y Valores</a>
      <a href="#" class="text-gray-400 hover:text-white">Carreras</a>
      <a href="#" class="text-gray-400 hover:text-white">Políticas de Privacidad</a>
      <a href="#" class="text-gray-400 hover:text-white">Términos del Servicio</a>
    </nav>
  </div>

  <div class="w-full md:w-1/4 flex flex-col">
    <h3 class="text-lg font-semibold mb-4">Soporte</h3>
    <nav class="space-y-2">
      <a href="#" class="text-gray-400 hover:text-white">Preguntas Frecuentes</a>
      <a href="#" class="text-gray-400 hover:text-white">Ayuda en línea</a>
      <a href="#" class="text-gray-400 hover:text-white">Confianza y Seguridad</a>
    </nav>
  </div>
</div>

<!-- Social Media Icons -->
<div class="flex justify-center space-x-4 mt-8">
  <a href="https://www.instagram.com/renovarte.sn/?theme=dark" class="text-gray-400 hover:text-white">
    <i class="fab fa-instagram"></i>
  </a>
  <a href="https://www.facebook.com/profile.php?id=100093497345781" class="text-gray-400 hover:text-white">
    <i class="fab fa-facebook"></i> 
  </a>
  <a href="#" class="text-gray-400 hover:text-white">
    <i class="fab fa-whatsapp"></i>
  </a>
</div>

<p class="text-center mt-8 text-gray-400">
  Todos los Derechos Reservados - RenovArte
</p>
`;

//menu
document.getElementById("footer").innerHTML = footer;

const menuToggle = document.getElementById("menu-toggle");
const closeToggle = document.getElementById("close-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  navbar.style.display = "flex";
  menuToggle.style.display = "none";
  closeToggle.style.display = "block";
});

closeToggle.addEventListener("click", () => {
  navbar.style.display = "none";
  menuToggle.style.display = "block";
  closeToggle.style.display = "none";
});
