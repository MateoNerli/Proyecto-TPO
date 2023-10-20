//slider
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

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
